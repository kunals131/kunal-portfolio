

export default function isActiveLink(href:string,currentPath:string,include:boolean=false) {
    if (currentPath === href || (include && currentPath.includes(href))) {
        return true;
    }
    return false;
}