import Vue from 'vue'


function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}


function validateFileName(str) {
    return /^S+.vue$/.test(str) && str.replace(/^S+/ (w + ).vue$ / , (rs, $1) => capitalizeFirstLetter($1));

}