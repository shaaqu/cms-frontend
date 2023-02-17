import {Component, OnInit} from '@angular/core';
import {MenuCategory} from "../dtos/MenuCategory";
import {MenuService} from "../service/menu.service";
import {MenuPosition} from "../dtos/MenuPosition";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  categories: MenuCategory[] = []
  menuPositions: Map<MenuCategory, MenuPosition[]> = new Map()


  constructor(private menuService: MenuService) {
  }

  ngOnInit() {
    this.getCategories();
    this.getMenuPositions();
  }

  private getCategories() {
    this.menuService.getCategories()
      .subscribe(response => {
        response.map((e: any) => this.categories.push(new MenuCategory(e)))
      })
  }

  private getMenuPositions() {
    for (let i = 0; i < this.categories.length; i++) {
      this.getMenuPosition(this.categories[i])
    }
  }

  private getMenuPosition(category: MenuCategory) {
    let positions = new Array<MenuPosition>();
    this.menuService.getMenuPositionByCategory(category.getId()).subscribe(response => {
      response.map((e: any) => positions.push(new MenuPosition(e)))
    });
    this.menuPositions.set(category, positions);
  }

  public listMenuPositions(category: MenuCategory): MenuPosition[] | undefined {
    return this.menuPositions.get(category);
  }


}
