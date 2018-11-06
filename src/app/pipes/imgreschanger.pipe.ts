import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imgreschanger'
})
export class ImgreschangerPipe implements PipeTransform {

  transform(value: string, url: string): string {
    url = value.replace('100x100bb', '800x800bb');
    return url;
  }

}
