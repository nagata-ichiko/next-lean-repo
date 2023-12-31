"use client";
import jsonServerProvider from "ra-data-json-server";
import { Admin, ListGuesser, Resource } from "react-admin";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const AdminReact = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="posts" list={ListGuesser} />
    <Resource name="comments" list={ListGuesser} />
  </Admin>
);

export default AdminReact;
