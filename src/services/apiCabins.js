/* eslint-disable no-unused-vars */
import supabase from "./supabase";

export async function getCabins() {
  //from("cabins") => name of table, select("*") => all feilds
  const { data, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.error(error);
    throw new Error(`Cabins could not be loaded`);
  }
  return data;
}

export async function deleteCabin(id){
  
const { data, error } = await supabase
  .from("cabins")
  .delete()
  .eq("id", id);

  if(error){
    console.error(error);
    throw new Error('Cabins could not be deleted');
  }

  return data;
}