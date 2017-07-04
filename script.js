



$('.button').on('click',function(e){
    console.log(e.target )
    console.log(e.currentTarget )
    let $button = $(e.currentTarget)

    let $popover = $button.parent().children('.popover')
    
    console.log($button.parent().children('.popover'))
    let close=function(){
        //console.log('取消监听')  
        $popover.removeClass('active')  
        $(document).off('click',close)   
    }

    let open=function(){
        $popover.addClass('active')      
       // console.log('监听')
        $(document).on('click',close)
    }

    if( $popover.hasClass('active')){
        close()          
    }else{
        $('.popover').removeClass('active')
        open()
        e.stopPropagation();
    } 
    
})

$('.popover').on('click',function(e){
    e.stopPropagation();
})






