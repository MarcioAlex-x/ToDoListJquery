$(document).ready(()=>{
    const ul = $('#ul')
    
    $('form').on('submit',(e)=>{
        e.preventDefault()
        const aFazer = $('#aFazer').val()
        let li = $('<li>').text(aFazer)
        ul.append(li)
        $('#aFazer').val('')
        if(li){
            $('#cabecalhoLista').text('Tarefas')
        }
    })
    ul.on('click','li',(e)=>{
        $(e.target).css({textDecoration:'line-through'})
    })
})