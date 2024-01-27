import { Component } from '@angular/core';
import { BannerComponent } from '../../core/banner/banner.component';
import { RecommendationsComponent } from '../../core/recommendations/recommendations.component';
import { ItemGroupComponent } from '../../core/item-group/item-group.component';
import { FilterBoxComponent } from '../../core/filter-box/filter-box.component';
import { FoodResultComponent } from '../../core/food-result/food-result.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BannerComponent, RecommendationsComponent, FilterBoxComponent, FoodResultComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
