const names = ['Pedro', 'Pablo', 'María', 'Juan', 'Diana']

    const userName = prompt('Ingresa tu nombre')

    const otherName = prompt('Ingresa otro nombre')

    names.push(userName)

    names[2] = otherName

    for(let i=0; i< names.length; i++){

    console.log(names[i])

    }