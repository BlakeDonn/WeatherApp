import * as React from "react";

type WeatherProps = {city: string};
type WeatherState = {city: string}


class WeatherForm: React.Component < WeatherProps, WeatherState > {
  state: WeatherState:{
  city: '',

}
render(){
  <div>{this.state.city}</div>
}
);
