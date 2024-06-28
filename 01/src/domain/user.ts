export default class User {
    name: string
    sobrenome: string
    
    constructor(){
        this.name = 'Alessandro'
        this.sobrenome = 'Traversi'
    }
    
    execute() {
        console.log('User: nome, sobrenome')
    }
}