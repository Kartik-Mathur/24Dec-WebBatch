$('body')
    .append(
        $('<input>')
            .attr('placeholder', "Enter Task")
    )
    .append(
        $('<button>')
            .text('Add Task')
            .click((ev) => {

                $('.taskList')
                    .append(
                        $('<li>')
                            .text(
                                $('input').val()
                            )
                            .append(
                                $('<button>')
                                    .text('↑')
                                    .addClass('up')
                                    .click((ev) => {
                                        $(ev.target).parent().insertBefore(
                                            $(ev.target).parent().prev()
                                        )
                                    })
                            )
                            .append(
                                $('<button>')
                                    .text('↓')
                                    .addClass('down')
                                    .click((ev) => {
                                        $(ev.target).parent().insertAfter(
                                            $(ev.target).parent().next()
                                        )
                                    })
                            )
                            .append(
                                $('<button>')
                                    .text('❌')
                                    .addClass('delete')
                                    .click((ev)=>{
                                        $(ev.target).parent().remove()
                                    })
                            )
                    )

                    $('input').val("")
            })
    )
    .append(
        $('<ul>')
            .addClass('taskList')
    )
