import React, { Component } from "react";

import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  SafeAreaView,
  StatusBar,
  ImageBackground,
} from "react-native";
import _ from "lodash";
import { ListItem, SearchBar, Avatar } from "react-native-elements";
import { getUsers, contains } from "../api/index";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import MyGarden from "./MyGarden";

class Search extends Component  {
  
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      error: null,
    };
  }

  componentDidMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = _.debounce(() => {
    this.setState({ loading: true });

    getUsers(20, this.state.query)
      .then((users) => {
        this.setState({
          loading: false,
          data: users,
          fullData: users,
        });
      })
      .catch((error) => {
        this.setState({ error, loading: false });
      });
  }, 250);

  handleSearch = (text) => {
    const formattedQuery = text.toLowerCase();
    const data = _.filter(this.state.fullData, (user) => {
      return contains(user, formattedQuery);
    });
    this.setState({ data, query: text }, () => this.makeRemoteRequest());
  };

  renderSeparator = () => {
    return (
        
      <View
        style={{
          height: 1,
          width: "50%",
          marginLeft: "14%",
          
          
        }}
      />
    );
  };

  renderHeader = () => {
    return (
      <SearchBar
        placeholder="Type Here..."
        lightTheme
        round
        onChangeText={this.handleSearch}
        value={this.state.query} 
      />
    );
  };

  renderFooter = () => {
    if (!this.state.loading) return null;

    return (
      <View
        style={{
          paddingVertical: 20,
          borderTopWidth: 1,
          borderColor: "white",
        }}
      >
        <ActivityIndicator animating size="small" />
      </View>
    );
  };

  
  render() {
    return (
      
      
        <ImageBackground style={{width: '100%',
        height: '100%'}}
        source={require("../../../Android_ GrowthTracker_GROWTH TRACKER/Android_ GrowthTracker_GROWTH TRACKER/src/const/assets/picture/bg2.jpg")}>
            <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
            <SafeAreaView>
        <FlatList
          
          data={this.state.data}
          renderItem={({ item, M }) => ( 
            
            
            
            <TouchableOpacity >
        
            <ListItem bottomDivider>
              <Avatar source={{ uri: item.picture.thumbnail }} rounded />
              <ListItem.Content>
                <ListItem.Title>{`${item.name.first} ${item.name.last}`}</ListItem.Title>
                <ListItem.Subtitle>{item.email}</ListItem.Subtitle>
              </ListItem.Content>
              <ListItem.Chevron />
            </ListItem>
            </TouchableOpacity>
            
          )}
          keyExtractor={(item) => item.email}
          ItemSeparatorComponent={this.renderSeparator}
          ListHeaderComponent={this.renderHeader}
          ListFooterComponent={this.renderFooter}
          
        />
        

    

  
      </SafeAreaView>
      </ImageBackground>
    );
  }
}

export default Search;
