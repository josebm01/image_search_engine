const result = document.querySelector('#resultado')
const form = document.querySelector('#formulario')


window.onload = () => {
    form.addEventListener('submit', validateForm)
}

const validateForm = (e) => {
    e.preventDefault()

    const searchTerm = document.querySelector('#termino').value
    if ( searchTerm === '') {
        showAlert('Ingresa un término de búsqueda')
        return 
    }

    searchImages(searchTerm)
}

const showAlert = ( message ) => {

    const alertExists = document.querySelector('.bg-red-100')

    if (!alertExists ) {
        const alert = document.createElement('P')
        alert.classList.add('bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3', 'rounded', 'max-w-lg', 'mx-auto', 'mt-6', 'text-center')
    
        alert.innerHTML = `
            <strong class="font-bold">¡Error!</strong>
            <span class="block sn:inline">${message}</span>
        `
    
        form.appendChild(alert)
    
        setTimeout(() => {
            alert.remove()
        }, 3000);
    }

}

const searchImages = ( term ) => {
    const key = '38074034-e295cb61916fa6e6a344f77f3';
    const url = `https://pixabay.com/api/?key=${key}&q=${term}`;

    fetch(url)
        .then( response => response.json() )
        .then( result => console.log( result ) )
}