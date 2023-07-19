function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')

    const img = document.querySelector('#profile img')

    if(html.classList.contains('light')) {
        img.setAttribute('src', './assets/avatar-light.png');
    } else {
        img.setAttribute('src', './assets/avatar.png');
    }

    const alt = document.querySelector('#profile img alt')

    if(html.classList.contains('light')) {
        alt.setAttribute('alt' , 'Foto de William Ramos sorrindo, usando óculos escuros e camisa social, barba feita e fundo rio vermelho' )
    }else {
        alt.setAttribute('alt' , 'Foto de William Ramos sério, usando óculos e camisa do bahia, barba e fundo fonte nova' )

    }
    
}

