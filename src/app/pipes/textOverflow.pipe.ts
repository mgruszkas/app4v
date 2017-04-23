import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'textOverflow'
})
export class TextOverflowPipe implements PipeTransform {
    public transform(text: string, maxLength: number = 200 ): string {
        let innerText = text.replace(/<(?:.|\n)*?>/gm, '');
        if (innerText.length > maxLength) {
            return innerText.substr(0, maxLength) + '...';
        }
        return innerText;
    }
}