import { LightningElement } from 'lwc';

export default class parentComponentWithData extends LightningElement {
    eventMessage = '';

    handleCustomEvent(event) {
        // Access the data from the event
        const { message, timestamp } = event.detail;
        this.eventMessage = `Received message: "${message}" at ${timestamp}`;
    }
}
