const mainHead = document.querySelector( '.main_head' );
const logo = document.querySelector( '.logo' );
window.addEventListener('scroll', function(){
    if(this.scrollY > 200){
        mainHead.classList.add( 'slidedown' );
        logo.style.color = '#000';
    }else{
        mainHead.classList.remove( 'slidedown' );
        logo.style.color = '';
    }
})
