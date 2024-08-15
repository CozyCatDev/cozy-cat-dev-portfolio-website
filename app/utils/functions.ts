const createModifierClasses = (s :{ readonly [key: string]: string}, modifiers: string[]): string => {
    let classNames;
    if (modifiers.length > 1){
        classNames = modifiers.reduce((prevModifier, currentModifier) => `${s[prevModifier]} ${s[currentModifier]}`);
    }
    else{
        classNames = s[modifiers[0]] || "";
    }
    classNames = classNames.replace("undefined","");
    return classNames;
}

export { createModifierClasses }