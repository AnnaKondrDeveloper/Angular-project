import { NewListingPageComponent } from './new-listing-page/new-listing-page.component';
import { MyListingsPageComponent } from './my-listings-page/my-listings-page.component';
import { EditListeningPageComponent } from './edit-listening-page/edit-listening-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListingDetailPageComponent } from './listing-detail-page/listing-detail-page.component';
import { ListingsPageComponent } from './listing-page/listing-page.component';

const routes: Routes = [
  {path: '', redirectTo: '/listings', pathMatch: 'full' },
  {path: 'listings', component: ListingsPageComponent, pathMatch: 'full' },
  {path: 'listings/:id', component: ListingDetailPageComponent},
  {path: 'contact/:id', component: ContactPageComponent},
  {path: 'edit-listing/:id', component: EditListeningPageComponent},
  {path: 'my-listings', component: MyListingsPageComponent},
  {path: 'new-listings', component: NewListingPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
