import { ItemExtra } from "semantic-ui-react";

function catchErrors(error, displayError) {
    let errorMsg;

    if (error.response) {
        errorMsg = error.response.data;
        console.error("Error response", errorMsg);

        // For Cloudinary image uploads
        if (error.response.data.error) {
            errorMsg = error.response.data.error.message;
        }
    } else if (error.request) {
        errorMsg = error.request.data;
        console.error("Error request", errorMsg);
    } else {
        errorMsg = error.message;
        console.error("Error message", errorMsg);
    }

    displayError(errorMsg);
}

export default catchErrors;