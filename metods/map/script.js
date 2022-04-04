function getAdmins(map){
    for([key, value] of Map){
        if (value == 'Admin'){
            admins.push(key)
        }
    }
    return admins;
}

const usuarios = new Map()

usuarios.set('Luiz', 'Admin')
usuarios.set('Fernanda', 'Admin')
usuarios.set('Jorge', 'User')
usuarios.set('Natália', 'Admin')

console.log(getAdmins(usuarios))