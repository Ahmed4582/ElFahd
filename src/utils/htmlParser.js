export const stripHtml = (html ="") => {
    let doc = new DOMParser().parseFromString(html, 'text/html');
    // return doc.body.textContent || "";
    if (doc.body.textContent !== "null" && doc.body.textContent !== "undefined") {
        return doc.body.textContent;
    } else {
        return "";
    }

};

