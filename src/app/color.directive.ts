import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appColor]',
  standalone: true,
})
export class ColorDirective implements OnInit {
  @Input() appColor: string = '';
  constructor(private el: ElementRef, private render: Renderer2) {}

  ngOnInit(): void {
    this.setColor(this.appColor);
  }

  private setColor(type: string) : void {
    let colorType1 = '';
    let colorType2 = '';
    let shadow = false;
    switch (type) {
      case 'normalshadow':
        colorType1 = '#BEB49C';
        shadow = true;
        break;
      case 'fireshadow':
        colorType1 = '#BE6526';
        shadow = true;
        break;
      case 'watershadow':
        colorType1 = '#35689B';
        shadow = true;
        break;
      case 'electricshadow':
        colorType1 = '#AD9B37';
        shadow = true;
        break;
      case 'grassshadow':
        colorType1 = '#5E9459';
        shadow = true;
        break;
      case 'iceshadow':
        colorType1 = '#78AAAA';
        shadow = true;
        break;
      case 'fightingshadow':
        colorType1 = '#83211C';
        shadow = true;
        break;
      case 'poisonshadow':
        colorType1 = '#5B245B';
        shadow = true;
        break;
      case 'groundshadow':
        colorType1 = '#A78f4E';
        shadow = true;
        break;
      case 'flyingshadow':
        colorType1 = '#7564A6';
        shadow = true;
        break;
      case 'psychicshadow':
        colorType1 = '#A43A5A';
        shadow = true;
        break;
      case 'bugshadow':
        colorType1 = '#6E7815';
        shadow = true;
        break;
      case 'rockshadow':
        colorType1 = '#827228';
        shadow = true;
        break;
      case 'ghostshadow':
        colorType1 = '#554372';
        shadow = true;
        break;
      case 'dragonshadow':
        colorType1 = '#3F208A';
        shadow = true;
        break;
      case 'darkshadow':
        colorType1 = '#4A3A64';
        shadow = true;
        break;
      case 'steelshadow':
        colorType1 = '#737381';
        shadow = true;
        break;
      case 'fairyshadow':
        colorType1 = '#8D5B65';
        shadow = true;
        break;
      case 'normal':
        colorType1 = '#E0D4B8';
        break;
      case 'fire':
        colorType1 = '#F08030';
        break;
      case 'water':
        colorType1 = '#6890F0';
        break;
      case 'electric':
        colorType1 = '#F8D030';
        break;
      case 'grass':
        colorType1 = '#78C850';
        break;
      case 'ice':
        colorType1 = '#98D8D8';
        break;
      case 'fighting':
        colorType1 = '#C03028';
        break;
      case 'poison':
        colorType1 = '#A040A0';
        break;
      case 'ground':
        colorType1 = '#E0C068';
        break;
      case 'flying':
        colorType1 = '#A890F0';
        break;
      case 'psychic':
        colorType1 = '#F85888';
        break;
      case 'bug':
        colorType1 = '#A8B820';
        break;
      case 'rock':
        colorType1 = '#B8A038';
        break;
      case 'ghost':
        colorType1 = '#705898';
        break;
      case 'dragon':
        colorType1 = '#7038F8';
        break;
      case 'dark':
        colorType1 = '#705848';
        break;
      case 'steel':
        colorType1 = '#B8B8D0';
        break;
      case 'fairy':
        colorType1 = '#EE99AC';
        break;
      case 'normalfire':
        colorType1 = '#E0D4B8';
        colorType2 = '#F08030';
        break;
      case 'normalwater':
        colorType1 = '#E0D4B8';
        colorType2 = '#6890F0';
        break;
      case 'normalelectric':
        colorType1 = '#E0D4B8';
        colorType2 = '#F8D030';
        break;
      case 'normalgrass':
        colorType1 = '#E0D4B8';
        colorType2 = '#78C850';
        break;
      case 'normalice':
        colorType1 = '#E0D4B8';
        colorType2 = '#98D8D8';
        break;
      case 'normalfighting':
        colorType1 = '#E0D4B8';
        colorType2 = '#C03028';
        break;
      case 'normalpoison':
        colorType1 = '#E0D4B8';
        colorType2 = '#A040A0';
        break;
      case 'normalground':
        colorType1 = '#E0D4B8';
        colorType2 = '#E0C068';
        break;
      case 'normalflying':
        colorType1 = '#E0D4B8';
        colorType2 = '#A890F0';
        break;
      case 'normalpsychic':
        colorType1 = '#E0D4B8';
        colorType2 = '#F85888';
        break;
      case 'normalbug':
        colorType1 = '#E0D4B8';
        colorType2 = '#A8B820';
        break;
      case 'normalrock':
        colorType1 = '#E0D4B8';
        colorType2 = '#B8A038';
        break;
      case 'normalghost':
        colorType1 = '#E0D4B8';
        colorType2 = '#705898';
        break;
      case 'normaldragon':
        colorType1 = '#E0D4B8';
        colorType2 = '#7038F8';
        break;
      case 'normaldark':
        colorType1 = '#E0D4B8';
        colorType2 = '#705848';
        break;
      case 'normalsteel':
        colorType1 = '#E0D4B8';
        colorType2 = '#B8B8D0';
        break;
      case 'normalfairy':
        colorType1 = '#E0D4B8';
        colorType2 = '#EE99AC';
        break;
      case 'firenormal':
        colorType1 = '#F08030';
        colorType2 = '#E0D4B8';
        break;
      case 'firewater':
        colorType1 = '#F08030';
        colorType2 = '#6890F0';
        break;
      case 'fireelectric':
        colorType1 = '#F08030';
        colorType2 = '#F8D030';
        break;
      case 'firegrass':
        colorType1 = '#F08030';
        colorType2 = '#78C850';
        break;
      case 'fireice':
        colorType1 = '#F08030';
        colorType2 = '#98D8D8';
        break;
      case 'firefighting':
        colorType1 = '#F08030';
        colorType2 = '#C03028';
        break;
      case 'firepoison':
        colorType1 = '#F08030';
        colorType2 = '#A040A0';
        break;
      case 'fireground':
        colorType1 = '#F08030';
        colorType2 = '#E0C068';
        break;
      case 'fireflying':
        colorType1 = '#F08030';
        colorType2 = '#A890F0';
        break;
      case 'firepsychic':
        colorType1 = '#F08030';
        colorType2 = '#F85888';
        break;
      case 'firebug':
        colorType1 = '#F08030';
        colorType2 = '#A8B820';
        break;
      case 'firerock':
        colorType1 = '#F08030';
        colorType2 = '#B8A038';
        break;
      case 'fireghost':
        colorType1 = '#F08030';
        colorType2 = '#705898';
        break;
      case 'firedragon':
        colorType1 = '#F08030';
        colorType2 = '#7038F8';
        break;
      case 'firedark':
        colorType1 = '#F08030';
        colorType2 = '#705848';
        break;
      case 'firesteel':
        colorType1 = '#F08030';
        colorType2 = '#B8B8D0';
        break;
      case 'firefairy':
        colorType1 = '#F08030';
        colorType2 = '#EE99AC';
        break;
      case 'waternormal':
        colorType1 = '#6890F0';
        colorType2 = '#E0D4B8';
        break;
      case 'waterfire':
        colorType1 = '#6890F0';
        colorType2 = '#F08030';
        break;
      case 'waterelectric':
        colorType1 = '#6890F0';
        colorType2 = '#F8D030';
        break;
      case 'watergrass':
        colorType1 = '#6890F0';
        colorType2 = '#78C850';
        break;
      case 'waterice':
        colorType1 = '#6890F0';
        colorType2 = '#98D8D8';
        break;
      case 'waterfighting':
        colorType1 = '#6890F0';
        colorType2 = '#C03028';
        break;
      case 'waterpoison':
        colorType1 = '#6890F0';
        colorType2 = '#A040A0';
        break;
      case 'waterground':
        colorType1 = '#6890F0';
        colorType2 = '#E0C068';
        break;
      case 'waterflying':
        colorType1 = '#6890F0';
        colorType2 = '#A890F0';
        break;
      case 'waterpsychic':
        colorType1 = '#6890F0';
        colorType2 = '#F85888';
        break;
      case 'waterbug':
        colorType1 = '#6890F0';
        colorType2 = '#A8B820';
        break;
      case 'waterrock':
        colorType1 = '#6890F0';
        colorType2 = '#B8A038';
        break;
      case 'waterghost':
        colorType1 = '#6890F0';
        colorType2 = '#705898';
        break;
      case 'waterdragon':
        colorType1 = '#6890F0';
        colorType2 = '#7038F8';
        break;
      case 'waterdark':
        colorType1 = '#6890F0';
        colorType2 = '#705848';
        break;
      case 'watersteel':
        colorType1 = '#6890F0';
        colorType2 = '#B8B8D0';
        break;
      case 'waterfairy':
        colorType1 = '#6890F0';
        colorType2 = '#EE99AC';
        break;
      case 'electricnormal':
        colorType1 = '#F8D030';
        colorType2 = '#E0D4B8';
        break;
      case 'electricfire':
        colorType1 = '#F8D030';
        colorType2 = '#F08030';
        break;
      case 'electricwater':
        colorType1 = '#F8D030';
        colorType2 = '#6890F0';
        break;
      case 'electricgrass':
        colorType1 = '#F8D030';
        colorType2 = '#78C850';
        break;
      case 'electricice':
        colorType1 = '#F8D030';
        colorType2 = '#98D8D8';
        break;
      case 'electricfighting':
        colorType1 = '#F8D030';
        colorType2 = '#C03028';
        break;
      case 'electricpoison':
        colorType1 = '#F8D030';
        colorType2 = '#A040A0';
        break;
      case 'electricground':
        colorType1 = '#F8D030';
        colorType2 = '#E0C068';
        break;
      case 'electricflying':
        colorType1 = '#F8D030';
        colorType2 = '#A890F0';
        break;
      case 'electricpsychic':
        colorType1 = '#F8D030';
        colorType2 = '#F85888';
        break;
      case 'electricbug':
        colorType1 = '#F8D030';
        colorType2 = '#A8B820';
        break;
      case 'electricrock':
        colorType1 = '#F8D030';
        colorType2 = '#B8A038';
        break;
      case 'electricghost':
        colorType1 = '#F8D030';
        colorType2 = '#705898';
        break;
      case 'electricdragon':
        colorType1 = '#F8D030';
        colorType2 = '#7038F8';
        break;
      case 'electricdark':
        colorType1 = '#F8D030';
        colorType2 = '#705848';
        break;
      case 'electricsteel':
        colorType1 = '#F8D030';
        colorType2 = '#B8B8D0';
        break;
      case 'electricfairy':
        colorType1 = '#F8D030';
        colorType2 = '#EE99AC';
        break;
      case 'grassnormal':
        colorType1 = '#78C850';
        colorType2 = '#E0D4B8';
        break;
      case 'grassfire':
        colorType1 = '#78C850';
        colorType2 = '#F08030';
        break;
      case 'grasswater':
        colorType1 = '#78C850';
        colorType2 = '#6890F0';
        break;
      case 'grasselectric':
        colorType1 = '#78C850';
        colorType2 = '#F8D030';
        break;
      case 'grassice':
        colorType1 = '#78C850';
        colorType2 = '#98D8D8';
        break;
      case 'grassfighting':
        colorType1 = '#78C850';
        colorType2 = '#C03028';
        break;
      case 'grasspoison':
        colorType1 = '#78C850';
        colorType2 = '#A040A0';
        break;
      case 'grassground':
        colorType1 = '#78C850';
        colorType2 = '#E0C068';
        break;
      case 'grassflying':
        colorType1 = '#78C850';
        colorType2 = '#A890F0';
        break;
      case 'grasspsychic':
        colorType1 = '#78C850';
        colorType2 = '#F85888';
        break;
      case 'grassbug':
        colorType1 = '#78C850';
        colorType2 = '#A8B820';
        break;
      case 'grassrock':
        colorType1 = '#78C850';
        colorType2 = '#B8A038';
        break;
      case 'grassghost':
        colorType1 = '#78C850';
        colorType2 = '#705898';
        break;
      case 'grassdragon':
        colorType1 = '#78C850';
        colorType2 = '#7038F8';
        break;
      case 'grassdark':
        colorType1 = '#78C850';
        colorType2 = '#705848';
        break;
      case 'grasssteel':
        colorType1 = '#78C850';
        colorType2 = '#B8B8D0';
        break;
      case 'grassfairy':
        colorType1 = '#78C850';
        colorType2 = '#EE99AC';
        break;
      case 'icenormal':
        colorType1 = '#98D8D8';
        colorType2 = '#E0D4B8';
        break;
      case 'icefire':
        colorType1 = '#98D8D8';
        colorType2 = '#F08030';
        break;
      case 'icewater':
        colorType1 = '#98D8D8';
        colorType2 = '#6890F0';
        break;
      case 'iceelectric':
        colorType1 = '#98D8D8';
        colorType2 = '#F8D030';
        break;
      case 'icegrass':
        colorType1 = '#98D8D8';
        colorType2 = '#78C850';
        break;
      case 'icefighting':
        colorType1 = '#98D8D8';
        colorType2 = '#C03028';
        break;
      case 'icepoison':
        colorType1 = '#98D8D8';
        colorType2 = '#A040A0';
        break;
      case 'iceground':
        colorType1 = '#98D8D8';
        colorType2 = '#E0C068';
        break;
      case 'iceflying':
        colorType1 = '#98D8D8';
        colorType2 = '#A890F0';
        break;
      case 'icepsychic':
        colorType1 = '#98D8D8';
        colorType2 = '#F85888';
        break;
      case 'icebug':
        colorType1 = '#98D8D8';
        colorType2 = '#A8B820';
        break;
      case 'icerock':
        colorType1 = '#98D8D8';
        colorType2 = '#B8A038';
        break;
      case 'iceghost':
        colorType1 = '#98D8D8';
        colorType2 = '#705898';
        break;
      case 'icedragon':
        colorType1 = '#98D8D8';
        colorType2 = '#7038F8';
        break;
      case 'icedark':
        colorType1 = '#98D8D8';
        colorType2 = '#705848';
        break;
      case 'icesteel':
        colorType1 = '#98D8D8';
        colorType2 = '#B8B8D0';
        break;
      case 'icefairy':
        colorType1 = '#98D8D8';
        colorType2 = '#EE99AC';
        break;
      case 'fightingnormal':
        colorType1 = '#C03028';
        colorType2 = '#E0D4B8';
        break;
      case 'fightingfire':
        colorType1 = '#C03028';
        colorType2 = '#F08030';
        break;
      case 'fightingwater':
        colorType1 = '#C03028';
        colorType2 = '#6890F0';
        break;
      case 'fightingelectric':
        colorType1 = '#C03028';
        colorType2 = '#F8D030';
        break;
      case 'fightinggrass':
        colorType1 = '#C03028';
        colorType2 = '#78C850';
        break;
      case 'fightingice':
        colorType1 = '#C03028';
        colorType2 = '#98D8D8';
        break;
      case 'fightingpoison':
        colorType1 = '#C03028';
        colorType2 = '#A040A0';
        break;
      case 'fightingground':
        colorType1 = '#C03028';
        colorType2 = '#E0C068';
        break;
      case 'fightingflying':
        colorType1 = '#C03028';
        colorType2 = '#A890F0';
        break;
      case 'fightingpsychic':
        colorType1 = '#C03028';
        colorType2 = '#F85888';
        break;
      case 'fightingbug':
        colorType1 = '#C03028';
        colorType2 = '#A8B820';
        break;
      case 'fightingrock':
        colorType1 = '#C03028';
        colorType2 = '#B8A038';
        break;
      case 'fightingghost':
        colorType1 = '#C03028';
        colorType2 = '#705898';
        break;
      case 'fightingdragon':
        colorType1 = '#C03028';
        colorType2 = '#7038F8';
        break;
      case 'fightingdark':
        colorType1 = '#C03028';
        colorType2 = '#705848';
        break;
      case 'fightingsteel':
        colorType1 = '#C03028';
        colorType2 = '#B8B8D0';
        break;
      case 'fightingfairy':
        colorType1 = '#C03028';
        colorType2 = '#EE99AC';
        break;
      case 'poisonnormal':
        colorType1 = '#A040A0';
        colorType2 = '#E0D4B8';
        break;
      case 'poisonfire':
        colorType1 = '#A040A0';
        colorType2 = '#F08030';
        break;
      case 'poisonwater':
        colorType1 = '#A040A0';
        colorType2 = '#6890F0';
        break;
      case 'poisonelectric':
        colorType1 = '#A040A0';
        colorType2 = '#F8D030';
        break;
      case 'poisongrass':
        colorType1 = '#A040A0';
        colorType2 = '#78C850';
        break;
      case 'poisonice':
        colorType1 = '#A040A0';
        colorType2 = '#98D8D8';
        break;
      case 'poisonfighting':
        colorType1 = '#A040A0';
        colorType2 = '#C03028';
        break;
      case 'poisonground':
        colorType1 = '#A040A0';
        colorType2 = '#E0C068';
        break;
      case 'poisonflying':
        colorType1 = '#A040A0';
        colorType2 = '#A890F0';
        break;
      case 'poisonpsychic':
        colorType1 = '#A040A0';
        colorType2 = '#F85888';
        break;
      case 'poisonbug':
        colorType1 = '#A040A0';
        colorType2 = '#A8B820';
        break;
      case 'poisonrock':
        colorType1 = '#A040A0';
        colorType2 = '#B8A038';
        break;
      case 'poisonghost':
        colorType1 = '#A040A0';
        colorType2 = '#705898';
        break;
      case 'poisondragon':
        colorType1 = '#A040A0';
        colorType2 = '#7038F8';
        break;
      case 'poisondark':
        colorType1 = '#A040A0';
        colorType2 = '#705848';
        break;
      case 'poisonsteel':
        colorType1 = '#A040A0';
        colorType2 = '#B8B8D0';
        break;
      case 'poisonfairy':
        colorType1 = '#A040A0';
        colorType2 = '#EE99AC';
        break;
      case 'groundnormal':
        colorType1 = '#E0C068';
        colorType2 = '#E0D4B8';
        break;
      case 'groundfire':
        colorType1 = '#E0C068';
        colorType2 = '#F08030';
        break;
      case 'groundwater':
        colorType1 = '#E0C068';
        colorType2 = '#6890F0';
        break;
      case 'groundelectric':
        colorType1 = '#E0C068';
        colorType2 = '#F8D030';
        break;
      case 'groundgrass':
        colorType1 = '#E0C068';
        colorType2 = '#78C850';
        break;
      case 'groundice':
        colorType1 = '#E0C068';
        colorType2 = '#98D8D8';
        break;
      case 'groundfighting':
        colorType1 = '#E0C068';
        colorType2 = '#C03028';
        break;
      case 'groundpoison':
        colorType1 = '#E0C068';
        colorType2 = '#A040A0';
        break;
      case 'groundflying':
        colorType1 = '#E0C068';
        colorType2 = '#A890F0';
        break;
      case 'groundpsychic':
        colorType1 = '#E0C068';
        colorType2 = '#F85888';
        break;
      case 'groundbug':
        colorType1 = '#E0C068';
        colorType2 = '#A8B820';
        break;
      case 'groundrock':
        colorType1 = '#E0C068';
        colorType2 = '#B8A038';
        break;
      case 'groundghost':
        colorType1 = '#E0C068';
        colorType2 = '#705898';
        break;
      case 'grounddragon':
        colorType1 = '#E0C068';
        colorType2 = '#7038F8';
        break;
      case 'grounddark':
        colorType1 = '#E0C068';
        colorType2 = '#705848';
        break;
      case 'groundsteel':
        colorType1 = '#E0C068';
        colorType2 = '#B8B8D0';
        break;
      case 'groundfairy':
        colorType1 = '#E0C068';
        colorType2 = '#EE99AC';
        break;
      case 'flyingnormal':
        colorType1 = '#A890F0';
        colorType2 = '#E0D4B8';
        break;
      case 'flyingfire':
        colorType1 = '#A890F0';
        colorType2 = '#F08030';
        break;
      case 'flyingwater':
        colorType1 = '#A890F0';
        colorType2 = '#6890F0';
        break;
      case 'flyingelectric':
        colorType1 = '#A890F0';
        colorType2 = '#F8D030';
        break;
      case 'flyinggrass':
        colorType1 = '#A890F0';
        colorType2 = '#78C850';
        break;
      case 'flyingice':
        colorType1 = '#A890F0';
        colorType2 = '#98D8D8';
        break;
      case 'flyingfighting':
        colorType1 = '#A890F0';
        colorType2 = '#C03028';
        break;
      case 'flyingpoison':
        colorType1 = '#A890F0';
        colorType2 = '#A040A0';
        break;
      case 'flyingground':
        colorType1 = '#A890F0';
        colorType2 = '#E0C068';
        break;
      case 'flyingpsychic':
        colorType1 = '#A890F0';
        colorType2 = '#F85888';
        break;
      case 'flyingbug':
        colorType1 = '#A890F0';
        colorType2 = '#A8B820';
        break;
      case 'flyingrock':
        colorType1 = '#A890F0';
        colorType2 = '#B8A038';
        break;
      case 'flyingghost':
        colorType1 = '#A890F0';
        colorType2 = '#705898';
        break;
      case 'flyingdragon':
        colorType1 = '#A890F0';
        colorType2 = '#7038F8';
        break;
      case 'flyingdark':
        colorType1 = '#A890F0';
        colorType2 = '#705848';
        break;
      case 'flyingsteel':
        colorType1 = '#A890F0';
        colorType2 = '#B8B8D0';
        break;
      case 'flyingfairy':
        colorType1 = '#A890F0';
        colorType2 = '#EE99AC';
        break;
      case 'psychicnormal':
        colorType1 = '#F85888';
        colorType2 = '#E0D4B8';
        break;
      case 'psychicfire':
        colorType1 = '#F85888';
        colorType2 = '#F08030';
        break;
      case 'psychicwater':
        colorType1 = '#F85888';
        colorType2 = '#6890F0';
        break;
      case 'psychicelectric':
        colorType1 = '#F85888';
        colorType2 = '#F8D030';
        break;
      case 'psychicgrass':
        colorType1 = '#F85888';
        colorType2 = '#78C850';
        break;
      case 'psychicice':
        colorType1 = '#F85888';
        colorType2 = '#98D8D8';
        break;
      case 'psychicfighting':
        colorType1 = '#F85888';
        colorType2 = '#C03028';
        break;
      case 'psychicpoison':
        colorType1 = '#F85888';
        colorType2 = '#A040A0';
        break;
      case 'psychicground':
        colorType1 = '#F85888';
        colorType2 = '#E0C068';
        break;
      case 'psychicflying':
        colorType1 = '#F85888';
        colorType2 = '#A890F0';
        break;
      case 'psychicbug':
        colorType1 = '#F85888';
        colorType2 = '#A8B820';
        break;
      case 'psychicrock':
        colorType1 = '#F85888';
        colorType2 = '#B8A038';
        break;
      case 'psychicghost':
        colorType1 = '#F85888';
        colorType2 = '#705898';
        break;
      case 'psychicdragon':
        colorType1 = '#F85888';
        colorType2 = '#7038F8';
        break;
      case 'psychicdark':
        colorType1 = '#F85888';
        colorType2 = '#705848';
        break;
      case 'psychicsteel':
        colorType1 = '#F85888';
        colorType2 = '#B8B8D0';
        break;
      case 'psychicfairy':
        colorType1 = '#F85888';
        colorType2 = '#EE99AC';
        break;
      case 'bugnormal':
        colorType1 = '#A8B820';
        colorType2 = '#E0D4B8';
        break;
      case 'bugfire':
        colorType1 = '#A8B820';
        colorType2 = '#F08030';
        break;
      case 'bugwater':
        colorType1 = '#A8B820';
        colorType2 = '#6890F0';
        break;
      case 'bugelectric':
        colorType1 = '#A8B820';
        colorType2 = '#F8D030';
        break;
      case 'buggrass':
        colorType1 = '#A8B820';
        colorType2 = '#78C850';
        break;
      case 'bugice':
        colorType1 = '#A8B820';
        colorType2 = '#98D8D8';
        break;
      case 'bugfighting':
        colorType1 = '#A8B820';
        colorType2 = '#C03028';
        break;
      case 'bugpoison':
        colorType1 = '#A8B820';
        colorType2 = '#A040A0';
        break;
      case 'bugground':
        colorType1 = '#A8B820';
        colorType2 = '#E0C068';
        break;
      case 'bugflying':
        colorType1 = '#A8B820';
        colorType2 = '#A890F0';
        break;
      case 'bugpsychic':
        colorType1 = '#A8B820';
        colorType2 = '#F85888';
        break;
      case 'bugrock':
        colorType1 = '#A8B820';
        colorType2 = '#B8A038';
        break;
      case 'bugghost':
        colorType1 = '#A8B820';
        colorType2 = '#705898';
        break;
      case 'bugdragon':
        colorType1 = '#A8B820';
        colorType2 = '#7038F8';
        break;
      case 'bugdark':
        colorType1 = '#A8B820';
        colorType2 = '#705848';
        break;
      case 'bugsteel':
        colorType1 = '#A8B820';
        colorType2 = '#B8B8D0';
        break;
      case 'bugfairy':
        colorType1 = '#A8B820';
        colorType2 = '#EE99AC';
        break;
      case 'rocknormal':
        colorType1 = '#B8A038';
        colorType2 = '#E0D4B8';
        break;
      case 'rockfire':
        colorType1 = '#B8A038';
        colorType2 = '#F08030';
        break;
      case 'rockwater':
        colorType1 = '#B8A038';
        colorType2 = '#6890F0';
        break;
      case 'rockelectric':
        colorType1 = '#B8A038';
        colorType2 = '#F8D030';
        break;
      case 'rockgrass':
        colorType1 = '#B8A038';
        colorType2 = '#78C850';
        break;
      case 'rockice':
        colorType1 = '#B8A038';
        colorType2 = '#98D8D8';
        break;
      case 'rockfighting':
        colorType1 = '#B8A038';
        colorType2 = '#C03028';
        break;
      case 'rockpoison':
        colorType1 = '#B8A038';
        colorType2 = '#A040A0';
        break;
      case 'rockground':
        colorType1 = '#B8A038';
        colorType2 = '#E0C068';
        break;
      case 'rockflying':
        colorType1 = '#B8A038';
        colorType2 = '#A890F0';
        break;
      case 'rockpsychic':
        colorType1 = '#B8A038';
        colorType2 = '#F85888';
        break;
      case 'rockbug':
        colorType1 = '#B8A038';
        colorType2 = '#A8B820';
        break;
      case 'rockghost':
        colorType1 = '#B8A038';
        colorType2 = '#705898';
        break;
      case 'rockdragon':
        colorType1 = '#B8A038';
        colorType2 = '#7038F8';
        break;
      case 'rockdark':
        colorType1 = '#B8A038';
        colorType2 = '#705848';
        break;
      case 'rocksteel':
        colorType1 = '#B8A038';
        colorType2 = '#B8B8D0';
        break;
      case 'rockfairy':
        colorType1 = '#B8A038';
        colorType2 = '#EE99AC';
        break;
      case 'ghostnormal':
        colorType1 = '#705898';
        colorType2 = '#E0D4B8';
        break;
      case 'ghostfire':
        colorType1 = '#705898';
        colorType2 = '#F08030';
        break;
      case 'ghostwater':
        colorType1 = '#705898';
        colorType2 = '#6890F0';
        break;
      case 'ghostelectric':
        colorType1 = '#705898';
        colorType2 = '#F8D030';
        break;
      case 'ghostgrass':
        colorType1 = '#705898';
        colorType2 = '#78C850';
        break;
      case 'ghostice':
        colorType1 = '#705898';
        colorType2 = '#98D8D8';
        break;
      case 'ghostfighting':
        colorType1 = '#705898';
        colorType2 = '#C03028';
        break;
      case 'ghostpoison':
        colorType1 = '#705898';
        colorType2 = '#A040A0';
        break;
      case 'ghostground':
        colorType1 = '#705898';
        colorType2 = '#E0C068';
        break;
      case 'ghostflying':
        colorType1 = '#705898';
        colorType2 = '#A890F0';
        break;
      case 'ghostpsychic':
        colorType1 = '#705898';
        colorType2 = '#F85888';
        break;
      case 'ghostbug':
        colorType1 = '#705898';
        colorType2 = '#A8B820';
        break;
      case 'ghostrock':
        colorType1 = '#705898';
        colorType2 = '#B8A038';
        break;
      case 'ghostdragon':
        colorType1 = '#705898';
        colorType2 = '#7038F8';
        break;
      case 'ghostdark':
        colorType1 = '#705898';
        colorType2 = '#705848';
        break;
      case 'ghoststeel':
        colorType1 = '#705898';
        colorType2 = '#B8B8D0';
        break;
      case 'ghostfairy':
        colorType1 = '#705898';
        colorType2 = '#EE99AC';
        break;
      case 'dragonnormal':
        colorType1 = '#7038F8';
        colorType2 = '#E0D4B8';
        break;
      case 'dragonfire':
        colorType1 = '#7038F8';
        colorType2 = '#F08030';
        break;
      case 'dragonwater':
        colorType1 = '#7038F8';
        colorType2 = '#6890F0';
        break;
      case 'dragonelectric':
        colorType1 = '#7038F8';
        colorType2 = '#F8D030';
        break;
      case 'dragongrass':
        colorType1 = '#7038F8';
        colorType2 = '#78C850';
        break;
      case 'dragonice':
        colorType1 = '#7038F8';
        colorType2 = '#98D8D8';
        break;
      case 'dragonfighting':
        colorType1 = '#7038F8';
        colorType2 = '#C03028';
        break;
      case 'dragonpoison':
        colorType1 = '#7038F8';
        colorType2 = '#A040A0';
        break;
      case 'dragonground':
        colorType1 = '#7038F8';
        colorType2 = '#E0C068';
        break;
      case 'dragonflying':
        colorType1 = '#7038F8';
        colorType2 = '#A890F0';
        break;
      case 'dragonpsychic':
        colorType1 = '#7038F8';
        colorType2 = '#F85888';
        break;
      case 'dragonbug':
        colorType1 = '#7038F8';
        colorType2 = '#A8B820';
        break;
      case 'dragonrock':
        colorType1 = '#7038F8';
        colorType2 = '#B8A038';
        break;
      case 'dragonghost':
        colorType1 = '#7038F8';
        colorType2 = '#705898';
        break;
      case 'dragondark':
        colorType1 = '#7038F8';
        colorType2 = '#705848';
        break;
      case 'dragonsteel':
        colorType1 = '#7038F8';
        colorType2 = '#B8B8D0';
        break;
      case 'dragonfairy':
        colorType1 = '#7038F8';
        colorType2 = '#EE99AC';
        break;
      case 'darknormal':
        colorType1 = '#705848';
        colorType2 = '#E0D4B8';
        break;
      case 'darkfire':
        colorType1 = '#705848';
        colorType2 = '#F08030';
        break;
      case 'darkwater':
        colorType1 = '#705848';
        colorType2 = '#6890F0';
        break;
      case 'darkelectric':
        colorType1 = '#705848';
        colorType2 = '#F8D030';
        break;
      case 'darkgrass':
        colorType1 = '#705848';
        colorType2 = '#78C850';
        break;
      case 'darkice':
        colorType1 = '#705848';
        colorType2 = '#98D8D8';
        break;
      case 'darkfighting':
        colorType1 = '#705848';
        colorType2 = '#C03028';
        break;
      case 'darkpoison':
        colorType1 = '#705848';
        colorType2 = '#A040A0';
        break;
      case 'darkground':
        colorType1 = '#705848';
        colorType2 = '#E0C068';
        break;
      case 'darkflying':
        colorType1 = '#705848';
        colorType2 = '#A890F0';
        break;
      case 'darkpsychic':
        colorType1 = '#705848';
        colorType2 = '#F85888';
        break;
      case 'darkbug':
        colorType1 = '#705848';
        colorType2 = '#A8B820';
        break;
      case 'darkrock':
        colorType1 = '#705848';
        colorType2 = '#B8A038';
        break;
      case 'darkghost':
        colorType1 = '#705848';
        colorType2 = '#705898';
        break;
      case 'darkdragon':
        colorType1 = '#705848';
        colorType2 = '#7038F8';
        break;
      case 'darksteel':
        colorType1 = '#705848';
        colorType2 = '#B8B8D0';
        break;
      case 'darkfairy':
        colorType1 = '#705848';
        colorType2 = '#EE99AC';
        break;
      case 'steelnormal':
        colorType1 = '#B8B8D0';
        colorType2 = '#E0D4B8';
        break;
      case 'steelfire':
        colorType1 = '#B8B8D0';
        colorType2 = '#F08030';
        break;
      case 'steelwater':
        colorType1 = '#B8B8D0';
        colorType2 = '#6890F0';
        break;
      case 'steelelectric':
        colorType1 = '#B8B8D0';
        colorType2 = '#F8D030';
        break;
      case 'steelgrass':
        colorType1 = '#B8B8D0';
        colorType2 = '#78C850';
        break;
      case 'steelice':
        colorType1 = '#B8B8D0';
        colorType2 = '#98D8D8';
        break;
      case 'steelfighting':
        colorType1 = '#B8B8D0';
        colorType2 = '#C03028';
        break;
      case 'steelpoison':
        colorType1 = '#B8B8D0';
        colorType2 = '#A040A0';
        break;
      case 'steelground':
        colorType1 = '#B8B8D0';
        colorType2 = '#E0C068';
        break;
      case 'steelflying':
        colorType1 = '#B8B8D0';
        colorType2 = '#A890F0';
        break;
      case 'steelpsychic':
        colorType1 = '#B8B8D0';
        colorType2 = '#F85888';
        break;
      case 'steelbug':
        colorType1 = '#B8B8D0';
        colorType2 = '#A8B820';
        break;
      case 'steelrock':
        colorType1 = '#B8B8D0';
        colorType2 = '#B8A038';
        break;
      case 'steelghost':
        colorType1 = '#B8B8D0';
        colorType2 = '#705898';
        break;
      case 'steeldragon':
        colorType1 = '#B8B8D0';
        colorType2 = '#7038F8';
        break;
      case 'steeldark':
        colorType1 = '#B8B8D0';
        colorType2 = '#705848';
        break;
      case 'steelfairy':
        colorType1 = '#B8B8D0';
        colorType2 = '#EE99AC';
        break;
      case 'fairynormal':
        colorType1 = '#EE99AC';
        colorType2 = '#E0D4B8';
        break;
      case 'fairyfire':
        colorType1 = '#EE99AC';
        colorType2 = '#F08030';
        break;
      case 'fairywater':
        colorType1 = '#EE99AC';
        colorType2 = '#6890F0';
        break;
      case 'fairyelectric':
        colorType1 = '#EE99AC';
        colorType2 = '#F8D030';
        break;
      case 'fairygrass':
        colorType1 = '#EE99AC';
        colorType2 = '#78C850';
        break;
      case 'fairyice':
        colorType1 = '#EE99AC';
        colorType2 = '#98D8D8';
        break;
      case 'fairyfighting':
        colorType1 = '#EE99AC';
        colorType2 = '#C03028';
        break;
      case 'fairypoison':
        colorType1 = '#EE99AC';
        colorType2 = '#A040A0';
        break;
      case 'fairyground':
        colorType1 = '#EE99AC';
        colorType2 = '#E0C068';
        break;
      case 'fairyflying':
        colorType1 = '#EE99AC';
        colorType2 = '#A890F0';
        break;
      case 'fairypsychic':
        colorType1 = '#EE99AC';
        colorType2 = '#F85888';
        break;
      case 'fairybug':
        colorType1 = '#EE99AC';
        colorType2 = '#A8B820';
        break;
      case 'fairyrock':
        colorType1 = '#EE99AC';
        colorType2 = '#B8A038';
        break;
      case 'fairyghost':
        colorType1 = '#EE99AC';
        colorType2 = '#705898';
        break;
      case 'fairydragon':
        colorType1 = '#EE99AC';
        colorType2 = '#7038F8';
        break;
      case 'fairydark':
        colorType1 = '#EE99AC';
        colorType2 = '#705848';
        break;
      case 'fairysteel':
        colorType1 = '#EE99AC';
        colorType2 = '#B8B8D0';
        break;
    }
    let gradient = '';
    if (shadow) {
      gradient = `0 0 20px 5px ${colorType1}`
      this.el.nativeElement.style.boxShadow = gradient;
    } else if (colorType2) {
      gradient = `linear-gradient(135deg, ${colorType1}, ${colorType2})`;
    } else {
      gradient = colorType1;
    }
    this.el.nativeElement.style.background = gradient;
  }
}
