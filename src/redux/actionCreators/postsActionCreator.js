import {
    SET_POSTS_LOADING,
    ADD_POST,
  } from "../action/postActions";

  const setPostsLoading = (data) => ({
    type: "SET_POSTS_LOADING",
    payload: data,
  });

  const addPost = (data) => ({
    type: "ADD_POST",
    payload: data,
  });

  export const doPost  = (data, image, setProgress)=>dispatch=>{
    console.log(data);
    data.collection("post").add(data).then(async res=>{
        const document = await res.get();
        const postData = {data: document.data(), id:document.id}
        const uploadRef = Storage.ref('posts/$ {image.name}')

        uploadRef.put(image).on("state_change", (snapshot)=>{
            const progress = Math.round((snapshot.bytesTransferred / snapshot.totelBytes) * 100);

            setProgress(progress);

        },(err)=>{
            console.log(err);
        }, async()=>{
            const url = await uploadRef.getDownloadeURL();
            data.collection("posts").doc(document.id).update({
                image:url
            }).then(()=>{
                postData.data.image = url;
                dispatch(addPost(postData));
                alert("post create successfully");
            }).catch(err=>{
                console.log(err);
            })
        })

    }).catch(err=>{
        console.log(err);
    })
  }