import SendDataUsecase from "../application/usecase/sendData.usecase";

export default class Nuxt {
    usecase: SendDataUsecase
    
    constructor() {
        this.usecase = new SendDataUsecase()
    }
    
    execute() {
        console.log('Starting Nuxt process')
        this.usecase.execute()
    }
}

new Nuxt().execute()
