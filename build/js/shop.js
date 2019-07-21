"use strict";
const dom = document;

class _Cart{
  constructor(params){
    const _ = this;
    _.goods = new Map();

  }
  get_count(){
    return this.goods.size;
  }
  has(id){
    const _ = this;
    if(_.goods.has(id)){
      return true;
    }else{
      return false;
    }
  }
  refresh(){
    const _ = this;
    let
      goods_cnt = _.get_count(),
      jcart_cnt = dom.querySelector('[data-jcart-cnt]');
    jcart_cnt.setAttribute('data-jcart-cnt',goods_cnt);
    if(goods_cnt > 0)
      jcart_cnt.innerHTML = `Товаров: ${goods_cnt}`;
    else
      jcart_cnt.innerHTML = `Пусто`;
  }
  add(product){
    const _ = this;
    j_Cart.goods.set(product.id,product);
    console.info(`Товар: "${product.title}" добавлен`);
    _.refresh();
    _.add_to_storage();
  }
  add_to_storage(){
    const _ = this;
    let goods = [..._.goods];
    if(!localStorage['j_cart'])
      localStorage.setItem('j_cart',JSON.stringify(goods));
    else{
      localStorage.removeItem('j_cart');
      localStorage.setItem('j_cart',JSON.stringify(goods));
    }
  }
  remove(id){
    const _ = this;
    _.goods.delete(id);
    _.refresh();
    _.add_to_storage();
  }
  init(){
    const _ = this;
    let raw_cart = localStorage.getItem('j_cart');
    if(raw_cart){
      let raw_arr = JSON.parse(raw_cart);
      raw_arr.forEach(function (el,index) {
        _.goods.set(el[0],new Product(el[1],true));
      })
    }
    _.refresh();
  }
}
const j_Cart = new _Cart();

class Product{
  constructor(params,from_cart){
    const _ = this;
    _.elem = params.elem ? params.elem : params.elem,
    _.id = params.productId ? params.productId : params.id,
    _.price = params.productPrice ? params.productPrice : params.price,
    _.title = params.productTitle ? params.productTitle : params.title,
    _.sale = params.productSale ? params.productSale : params.sale,
    _.currency = params.productCurrency ? params.productCurrency : params.currency,
    _.amount = 1;
    if(from_cart){
      let
        elem = dom.querySelector(`[data-product-id="${_.id}"]`);
      if(elem){
        _.set_elem(elem,from_cart);
      }
    }
  }
  set_elem(elem,from_cart){
    const _ = this;
    _.elem = elem;
    _.set_cart_listeners(from_cart);
  }
  set_amount(amount){
    const _ = this;
    _.amount+=amount;
  }
  set_cart_listeners(from_cart){
    const _ = this;
    let
      item = _.elem,
      cart_btn = item.querySelector('[data-tocart]');
    if(from_cart){
      cart_btn.classList.add('active');
    }
    if(cart_btn){
      cart_btn.onclick = function(){
         const __ = this;
         if(!__.classList.contains('active')){
           __.classList.add('active');
          _.to_cart();
         }else{
           __.classList.remove('active');
           _.remove_from_cart();
         }
       };
    }
  }
  to_cart(){
    const _ = this;
    j_Cart.add(_);
  }
  remove_from_cart(){
    const _ = this;
     j_Cart.remove(_.id);
  }
  to_favorite(){

  }
}

class Client{
  constructor(params){
    let
      cart = params.cart,
      favorites = params.favorites;
  }
}
j_Cart.init();
let
  goods = dom.querySelectorAll(".j_product");
for(let item of goods){
  if(!j_Cart.goods.has(item.dataset.productId)){
    let
        product = new Product(item.dataset,false);
    product.set_elem(item);
  }

}
