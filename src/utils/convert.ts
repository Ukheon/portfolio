export const joinBeforeTextList = (textList: string[], currentText: string, index: number) => {
    if (index === 0) return currentText;

    const beforeText = textList.slice(0, index).join('\n');
    return `${beforeText}\n${currentText}`;
};
