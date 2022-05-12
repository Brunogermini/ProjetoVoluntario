const menuItens =document.querySelectorAll('#navbar-itens');
menuItens.forEach(item =>{
    item.addEventListener('click', scrollToIdOnClick)
})

function scrollToIdOnClick(event){
    event.preventDefault();
    const to = getScrollTopByHref(event.target);
   

    window.scroll({
        top:to - 50,
        behavior:"smooth",
    });
}

function getScrollTopByHref(element){

    const id = element.getAttribute('href');
    return document.querySelector(id).offsetTop;
}
