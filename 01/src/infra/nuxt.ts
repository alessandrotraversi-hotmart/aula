import SendDataUsecase from "../application/usecase/sendData.usecase";

export default class Nuxt {
    usecase: SendDataUsecase
    
    constructor() {
        this.usecase = new SendDataUsecase()
    }
    
    execute() {
        console.log('Starting Nuxt processs')
        this.usecase.execute()
    }
}

new Nuxt().execute()
