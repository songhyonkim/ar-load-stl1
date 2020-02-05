function init() {
  // setup the scene for rendering
  var camera = initCamera(new THREE.Vector3(50, 50, 100));
  var loaderScene = new BaseLoaderScene(camera);
  camera.lookAt(new THREE.Vector3(0, 0, 0));

  // load the model: model from http://www.thingiverse.com/thing:69709
  var loader = new THREE.STLLoader();
  //var stl_file = "../model/SolidHead_2_lowPoly_42k.stl";
  var stl_file = "../model/box2.stl";
  //var stl_file = "../model/Air_Airliner_Commercial.stl";
  loader.load(stl_file, function(geometry) {
    //    var mat = new THREE.MeshStandardMaterial({
    var mat = new THREE.MeshPhongMaterial({
      color: 0xffffff,
      metalness: 1,
      roughness: 0.5
    });
    var group = new THREE.Mesh(geometry, mat);
    group.rotation.x = -0.5 * Math.PI;
    group.scale.set(0.3, 0.3, 0.3);

    // call the default render loop.
    loaderScene.render(group, camera);
  });
}
