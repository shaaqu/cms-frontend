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
  menuPositions: Map<string, MenuPosition[]> = new Map()


  constructor(private menuService: MenuService) {
  }

  ngOnInit() {
    this.getMenu();
    console.log(this.menuPositions)
  }

  private getMenu() {
    this.menuService.getCategories()
      .subscribe(response => {
        response.map((e: any) => {
          let c = new MenuCategory(e);
          this.categories.push(c);
          this.menuPositions.set(c.getCategory(), this.getMenuPositions(c))
        })
      })
  }

  private getMenuPositions(category: MenuCategory): MenuPosition[] {
    console.log(category)
    let positions = new Array<MenuPosition>();
    this.menuService.getMenuPositionByCategory(category.getId()).subscribe(response => {
      response.map((e: any) => positions.push(new MenuPosition(e)))
    });
    return positions;
  }

  public listMenuByCategory(category: string): MenuPosition[] | undefined{
    return this.menuPositions.get(category);
  }


}
