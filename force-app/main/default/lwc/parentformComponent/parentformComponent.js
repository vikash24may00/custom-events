import { LightningElement, track } from 'lwc';

export default class ParentFormComponent extends LightningElement {
    @track formData = {};

    handleFormSubmit(event) {
        this.formData = event.detail;
    }
}
