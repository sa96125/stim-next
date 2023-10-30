import * as React from "react";
import { notFound } from "next/navigation";

type Props = {
  audios: Audio[];
  isLoading: boolean;
  isError: boolean;
};

/**
 *  
 * <Search>
 *   <Search.Term></Search.Term>
 *   <Search.Button></Search.Term>
 * </Search>
 */

export default function Search({ audios, isLoading, isError }: Props) {
  if (isError) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;
  if (!audios) return notFound();

  return audios.map((audio) => {
    <div key={audio.id}>
      <h2>{audio.title}</h2>
      <p>{audio.description}</p>
    </div>; 
  });
}
