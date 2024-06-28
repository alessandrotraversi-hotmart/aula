import SendDataUsecase from "../application/usecase/sendData.usecase";

export default class {
    usecase: SendDataUsecase
    
    constructor() {
        this.usecase = new SendDataUsecase()
    }
    
    execute() {
        console.log('Starting server process')
        this.usecase.execute()
    }
}