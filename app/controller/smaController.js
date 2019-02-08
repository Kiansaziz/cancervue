'use strict';

app.controller('smaCtrl', ['$scope' , 'memberService', function($scope, memberService){
    $scope.fetch = function(){
		var members = memberService.read();
		members.then(function(response){
			$scope.members = response.data;
		});

		var members = memberService.readTbl();
		members.then(function(response){
			$scope.test = response.data;
		});
    }
    
    $scope.headerImage ="HEADER-IMAGE.jpg";
    //section 1
    $scope.sma ="LOGO-SMA-WEBSITE.png";
    
    $scope.section1 = 
    [
        {
            headerSection : "Deteksi kanker dan tentukan penanganan yang tepat sejak dini"
        },
        {
            
        }
    ];

    $scope.captionSection = 
    [
        {
           caption :   "Next Generation Sequencing"
        },
        {
            caption : "Akurasi 99%"
        },
        {
            caption : "Sample dari tissue biospy atau sample darah"
        },
        {
            caption : "Lebih cepat dengan pemeriksaan gen menyeluruh"
        }                
    ];
    
    $scope.section2=
    [
        {
            headerSma2: "Precision Medicine",
            captionSma2: 
            "Penanganan dan pengobatan untuk pasien kanker konvensional pada umumnya hanya berdasarkan tipe kanker yang dimiliki oleh pasien."+ 
            " Namun, studi menunjukkan bahwa beberapa tipe pengobatan seperti kemoterapi terentu hanya efektif di 32% populasi, dan 68% dari" +
             " pengobatan tersebut sia-sia. Dengan menganalisis profil genetik dari sel tumor atau kanker tersebut, obat atau tipe kemoterapi" + 
             " yang tepat dapat diberikan sesuai dengan kebutuhan dan menghindari berkembangnya kanker secepat mungkin.",
            referensiSma2: "-Source:Genome Medicine(2016) 8:109-"
        }
    ];

    $scope.section3=
    [
        {
            headerSma3 : "Pemeriksaan Menyeluruh",
            captionSma3 : "Somatic mutation analysis dapat menganalisis sel tumor atau kanker secara komprehensif, lebih dari 50 gen dapat dianalisis dalam 1 pemeriksaan, sehingga dokter dan pasien dapat menentukan proses penanganan yang lebih cepat dengan menggunakan sampel yang terbatas."
        },
        {
            headerSma3 : "Mengetahui Secara Mendetail Mutasi Gen Yang Terjadi Pada Sel Kanker",
            captionSma3 : "Semua kanker diakibatkan oleh perubahan genetik, namun 1 tipe kanker bisa diakibatkan oleh mutasi gen yang berbeda pada individu yang berbeda. Somatic mutation analysis dapat menganalisis secara mendetil dan akutat, mutasi yang menyebabkan perkembangan sel kanker tersebut."
        },
        {
            headerSma3 : "Membantu Dokter Untuk Menentukan Jenis Pengobatan Yang Tepat",
            captionSma3 : "Tumor atau kanker dengan profil genetik yang berbeda memiliki respon yang berbeda pada pengobatan tertentu. Melalui somatic mutation analysis, sel tumor atau kanker dianalisis untuk membantu dokter menentukan jenis pengobatan yang tepat untuk mendapatkan hasil yang maksimal."
        }
    ];

    $scope.sectionDetail2=
    [
        {
            captionDetail2:"SMA Liquid menggunakan sampel darah Anda untuk menganalisis profil genetik pada"+
            "sel tumor untuk membantu dokter menentukan jenis pengobatan yang tepat, sekaligus"+
            " mendeteksi dini dan memantau efektivitas pengobatan yang diberikan."
        }
    ];


    $scope.sectionDetail3=
    [
        {
            headerDetail3 :"MENGANALISIS KANKER SECARA NON-INVASIF MENGGUNAKAN DARAH",
            captionDetail3 :"SMA Liquid menggunakan analisis sekuensing cell-free tumor DNA" +
                            " yang terdapat dalam darah, sehingga tidak memerlukan sampel jaringan" +
                            " dari tumor atau kanker tersebut. Dengan metode yang non-invasif, risiko, menyebarkan " +
                            "cairan atau sel tumor akibat prosedur  pengambilan jaringan konvensional dapat dihindari."
         }
    ];

    $scope.sectionDetail5=
    [
        { 
        headerDetail5 :"PEMERIKSAAN MENYELURUH",
        captionDetail51 :" SMA Liquid mendeteksi dan menganalisis sel tumor atau kanker di seluruh tubuh" +
                         "secara sekaligus, tidak spesifik dilokasi tertentu" , 
        captionDetail52 : "Pemeriksaan lebih dari 50 gen yang berhubungan dengan lebih dari 10 tipe kanker"
        }
           
    ];

    $scope.sectionDetail6=
    [
        {
            headerDetail6 :"DETEKSI DAN ANALISIS KANKER DI TEMPAT YANG SULIT DIAKSES",
            captionDetail6 : "Hal ini sangat penting terutama untuk sel tumor atau kanker yang sulit "+
                             "diakses oleh proses biopsy biasa seperti paru-paru dan pankreas."
        }
    ];

    $scope.sectionDetail7=
    [
        {
            headerDetail7:"MEMANTAU EFEKTIVITAS PENGOBATAN",
            captionDetail7 : "SMA Liquid menganalisis level call free tumor DNA (ctDNA) dalam darah Anda " +
                            "untuk memantau respon obat yang diberikan. Apabila pengobatan yang diberikan "+
                            "efektif dalam menangani tumor/kanker yang ada, tingkat ctDNA dalam darah Anda "+
                            "akan menurun."
        }
    ];

    $scope.fbWhite = "fb-white.png";
    $scope.fbColor = "fb-colored.png";

    $scope.igWhite ="instagram-white.png";
    $scope.igColor = "instagram-colored.png";
    $scope.cancervueBottom = "cancervue-white-bottom.png";


    $scope.tabelKanker = "Tabel.jpg";
    $scope.tabelKankerDetail = "tabel-kanker-zoom-icon.png";

    $scope.fb="https://www.facebook.com/cancervue/";
    $scope.ig= "https://www.instagram.com/cancervue/";


}]);