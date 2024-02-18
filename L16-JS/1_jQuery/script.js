$('body')
    .append(
        $('<input>')
            .attr('placeholder',"Enter Task")
    )
    .append(
        $('<button>')
            .text('Add Task')
            .click((ev)=>{
                
            })
    )
    .append(
        $('<ul>')
            .addClass('taskList')
    )
