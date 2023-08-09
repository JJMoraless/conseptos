- Basics
    
    ```jsx
    // nombre de colecciones de de la db selecionada
    const collections = await db.collections();
    ```
    
    findOne
    
    ```jsx
    // devuelve el primer documento que cumple con la condicion del filtro
    
    findOne(filtro, options ):
    ```
    
    ```jsx
    // creamos o seleccionamos una collection con la db seleccionada que a su vez esta dentro de un cluster
    const cars = db.collection("cars");
    ```
    
    insertMany
    
    ```jsx
    const cursorInsert = await cars.insertMany([
      {
        name: "tractor-x",
        model: "xx",
      },
      {
        name: "bicicleta-x",
        model: "ss",
      },
    ]);
    ```
    
    updateMany 
    
    ```jsx
    // cambia todos los que se llamane "xxxxxxxxxx" a tesla
    await cars.updateMany({ name: "xxxxxxxxxxxxx"}, {$set: {name: "tesla"}});
    ```
    
    updateOne
    
    ```jsx
    // cambia el primero que se llame "xxxxxxxxxx" a tesla
    
    await cars.updateOne({ name: "xxxxxxxxxxxxx"}, {$set: {name: "tesla"}});
    
    // incrementa a cualquier valor un campo numerico de un documento
    const docTransac = await transactions.updateOne(
      { _id: new ObjectId("5ca4bbc1a2dd94ee58161ccb") },
      {$inc: {transaction_count: 1}}
    );
    
    const doc2 = await transactions.findOne({
      _id: new ObjectId("5ca4bbc1a2dd94ee58161ccb"),
    });
    
    console.log(doc2);
    
    // agrega un elemento a un array: 
    
    await transactions.updateOne(
      { _id: new ObjectId("5ca4bbc1a2dd94ee58161cb6") },
      { $push: { transactions: "elelement de un array" } }
    );
    
    console.log(
      await transactions.findOne({ _id: new ObjectId("5ca4bbc1a2dd94ee58161cb6") })
    );
    
    ```
    
    findOne
    
    ```jsx
    // devuelve el primer documento que coincida
    const carFound = await cars.findOne({name: "tesla"});
    console.log(carFound);
    ```
    
    deleteMany
    
    ```jsx
    // borra todos los que coincidan si esta bacio borra todos los documentos
    cars.deleteMany()
    ```
    
    find
    
    ```jsx
    // devulve un cursor con el que podemos iteractuara para hacer busquedas en la collection
    
    const cursorCars = cars.find()
    console.log(await cursorCars.toArray());
    
    while (await searchCursor.hasNext()) {
      console.log(await searchCursor.next());
    }
    
    // busca todos, ordena por borough y limita a 5 y devuelve el cursor apuntando
    // a esos documentos
    
    const cursorRestaurants = restaurants.find().sort({borough: 1}).limit(5)
    console.log(await cursorRestaurants.toArray());
    
    // buscar por un campo de un documento anidado
    const result = restaurants.find({ "address.building": "203" }).limit(4);
    console.log(await result.toArray());
    
    // busca solo los documentos con  transaction_count mayor a 76
    const cursorTransactions =  transactions.find({transaction_count: {$gt: 76}})
    const transactionsFound = await cursorTransactions.toArray()
    console.log(transactionsFound);
    
    // projection: excluye o incluye campos del documento o ducumentos 1 incluir 0 excluir
    const docsWithProjection = await transactions.find(
      { account_id: 383701 },
      { projection: { account_id: 1 } }
    ).toArray()
    
    ```