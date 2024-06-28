import User from '../../domain/user'

export default class SendDataUsecase {
    user: User
    
    constructor() {
        this.user = new User()
    }
    
    execute(){
        this.user.execute()
        console.log('Sending data to Marketingcloud')
    }
}