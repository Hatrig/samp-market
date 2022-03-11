const open_modal = (link, frame) => {
    link.addEventListener('click', e => {
        e.preventDefault()

        document.querySelectorAll('.auth-form__modal').forEach(e => {
            if(e.classList.contains('active'))
            {
                e.classList.remove('active')
            }
        })

        if(frame.classList.contains('active'))
        {
            frame.classList.remove('active')
        }
        else
        {
            frame.classList.add('active')
        }
    })

    frame.querySelector('.close-link').addEventListener('click', e => {
        e.preventDefault()
        frame.classList.remove('active')
    })
}

open_modal(document.querySelector('#auth-link'), document.querySelector('#login_form'))
open_modal(document.querySelector('#reg-link'), document.querySelector('#register_form'))
open_modal(document.querySelector('#recovery_link'), document.querySelector('#recovery_form'))