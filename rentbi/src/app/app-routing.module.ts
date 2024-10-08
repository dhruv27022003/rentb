import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { BikepageComponent } from './components/pages/bikepage/bikepage.component';
import { CartComponent } from './components/pages/cart/cart.component';
import { ThanksComponent } from './components/partial/thanks/thanks.component';
import { OrderPlacedComponent } from './components/partial/order-placed/order-placed.component';
import { ChatbotComponent } from './components/pages/chatbot/chatbot.component';
import { UploadComponent } from './components/pages/upload/upload.component';
import { DeletepageComponent } from './components/pages/deletepage/deletepage.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'explore/:id', component: BikepageComponent},
  { path: 'tag/:tag', component: HomeComponent},
  { path: 'cart-page', component: CartComponent},
  { path: 'placeOrder', component: ThanksComponent},
  { path: 'orderPlaced', component: OrderPlacedComponent},
  { path: 'chatbot', component: ChatbotComponent},
  { path: 'upload-page', component: UploadComponent},
  { path: 'delete', component: DeletepageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
