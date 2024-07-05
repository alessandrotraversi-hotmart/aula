import SendDataUsecase from "../application/usecase/sendData.usecase";

export default class Next {
    usecase: SendDataUsecase

    constructor() {
        this.usecase = new SendDataUsecase()
    }

    execute() {
        console.log('Starting Next process')
        this.usecase.execute()
    }
}

new Next().execute()