export default function GifController($scope, SERVER, $http) {
    $scope.text = "Hello Add Controller";
    $scope.gifs = [];
    $scope.addGif = gif => {
        $http.post(SERVER.URL, gif).then(res => {
            $scope.gifs.push(res.data);
            $scope.gif = {};
        });
    };
    $scope.deleteMe = id => {
        $http.delete(SERVER.URL + id).then(res => {
            $scope.gifs = $scope.gifs.filter(gif => gif._id !== id);
        });
    }
    let init = ()=>{
        $http.get(SERVER.URL).then(res => {
            $scope.gifs = res.data;
        });
    };
    init();
}

GifController.$inject = ['$scope', 'SERVER', '$http'];
