import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import {Preloader} from "../../compontents/common/Preloader/Preloader";

interface userPropsType {
 getUser:(username:string) => void
 user:any
 loading:boolean
}
export class UserPage extends React.Component<userPropsType, any>{
 componentDidMount() {
  //@ts-ignore
  this.props.getUser(this.props.match.params.login)
 }

 render() {
 console.log(this.props.user)
 const {
  name,
  avatar_utl,
  location,
  bio,
  blog,
  login,
  html_url,
  followers,
  following,
  public_repos,
  public_gists,
  hireable} = this.props.user
  if(this.props.loading) return <Preloader/>
 return (
     <>
      <Link to={'/'}>Back</Link>
      <div>
       {name}
      </div>
     </>

 );
}

};