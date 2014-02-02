 creatures_enum = Object.freeze(
	{
		Champion:0, 
		Archmage:1, 
		Paladin:2, 
		Inquisitor:3, 
		Sea_Wolf:4, 
		Knight:5, 
		Gunner:6, 
		Blackmage:7, 
		Peasant:8, 
		Archer:9, 
		Pirate:10, 
		Vagabond:11, 
		Pilgrim:12, 
		Swordsman:13, 
		Assassin:14, 
		Demonologist:15, 
		Dark_Griffin:16, 
		Duke_of_Darkness:17, 
		Fiery_Spider:18, 
		Black_Unicorn:19, 
		Inventor:20, 
		Necromancer:21, 
		Evil_Eye:22, 
		Cave_Spider:23, 
		Possessed_Bear:24, 
		Eyebeast:25, 
		Ghost:26, 
		Zombie:27, 
		Alchemist:28, 
		Gargoyle_Shaman:29, 
		Ancient_Ent:30, 
		Dryad:31, 
		Greymaned_Griffin:32, 
		Lake_Fairy:33, 
		Gargoyle_Hunter:34, 
		Forest_Guardian:35, 
		Ranger:36, 
		Nigh_Wolf:37, 
		Young_Fairy:38, 
		Gargoyle_Trainee:39, 
		Unicorn:40, 
		Druid:41, 
		Cyclops:42, 
		Emerald_Dragon:43, 
		TRex:44, 
		Royal_Thorn:45, 
		Ancient_Serpent:46, 
		Sea_Devil:47, 
		Polar_Bear:48, 
		Thorn_Hunter:49, 
		Lake_Draconid:50, 
		Brontaur:51, 
		Swamp_Serpent:52
	}
);

 resources_enum = Object.freeze(
 {
 	Alchemists_Jar:0,
 	Lesser_Magic_Seal:1,
 	Linen_Fabric:2,
 	Forest_Herbs:3,
 	Furs:4,
 	Magic_Powder:5,
 	Parchment:6,
 	Iron_Bar:7,
 	Torn_Hide:8,
 	Coarse_Thread:9,
 	Wood:10,
 	Silk_Fabric:11,
 	Runic_Seal:12,
 	Water_Resistant_Paint:13,
 	Silver_Ingot:14,
 	Magical_Parchment:15,
 	Strong_Acid:16,
 	Living_Tree:17,
 	Stardust:18,
 	Wool_Fabric:19,
 	Tough_Hide:20,
 	Thin_Thread:21,
 	Transformation_Elixir:22,
 	Runic_Scroll:23,
 	Sands_Of_Time:24,
 	Starfabric:25,
 	Enchanted_Thread:26,
 	Potion_of_Life:27,
 	Magic_Hide:28,
 	Sorcerers_Seal:29,
 	Gold_Ingot:30
 }
 	);

var resources_path="img/res/";
var creatures_path="img/creatures/";

//function getFilePath()

 //РЕСУРСЫ
resources = [           
	{
        name: "Склянка алхимика",
        path: resources_path+"Alchemists_Jar.jpg",
        type: "обычный",
        description: "Можно заполучить в качестве трофея у алхимиков, пиратов и болотных змей.",
        receipt: null,
        price: 50
    },
    {
        name: "Малая печать магии",
        path: resources_path+"Lesser_Magic_Seal.jpg",
        type: "обычный",
        receipt: null
    },
    {
        name: "Льняная ткань",
        path: resources_path+"Linen_Fabric.jpg",
        type: "обычный",
        receipt: null
    },
    {
        name: "Лесные травы",
        path: resources_path+"Forest_Herbs.jpg",
        type: "Можно заполучить в качестве трофея у крестьян, терний-охотников и алхимиков.",
        receipt: null,
        price: 50
    },
    {
        name: "Мех",
        path: resources_path+"Furs.jpg",
        type: "обычный",
        receipt: null
    },
    {
        name: "Волшебный порошок",
        path: resources_path+"Magic_Powder.jpg",
        type: "обычный",
        receipt: null
    }, 
    {
        name: "Пергамент",
        path: resources_path+"Parchment.jpg",
        type: "обычный",
        receipt: null
    }, 
    {
        name: "Железо",
        path: resources_path+"Iron_Bar.jpg",
        type: "обычный",
        receipt: null
    }, 
    {
        name: "Рваная шкура",
        path: resources_path+"Tough_Hide.jpg",
        type: "обычный",
        receipt: null
    }, 
    {
        name: "Грубая нить",
        path: resources_path+"Torn_Hide.jpg",
        type: "обычный",
        receipt: null
    }, 
    {
        name: "Дерево",
        path: resources_path+"Wood.jpg",
        type: "обычный",
        receipt: null
    },
	{
        name: "Шелковая ткань",
        path: resources_path+"Silk_Fabric.jpg",
        type: "особый",
        receipt: [
        	{
        		name: "",
        		path: "",
        		count: 0
        	},
        ]
    },
    {
        name: "Рунная печать",
        path: resources_path+"Runic_Seal.jpg",
        type: "особый",
        receipt: [
        	{
        		name: "",
        		path: "",
        		count: 0
        	},
        ]
    },
    {
        name: "Водостойкая краска",
        path: resources_path+"Water_Resistant_Paint.jpg",
        type: "особый",
        receipt: [
        	{
        		name: "",
        		path: "",
        		count: 0
        	},
        ]
    },
    {
        name: "Серебряный слиток",
        path: resources_path+"Silver_Ingot.jpg",
        type: "особый",
        description: "Создается в лаборатории и иногда встречается в качестве трофея у особых и легендарых существ",
        price: 150,
        receipt: [
        	{
        		name: "",
        		path: "",
        		count: 0
        	},
        ]
    },
    {
        name: "Магический пергамент",
        path: resources_path+"Magical_Parchment.jpg",
        type: "особый",
        receipt: [
        	{
        		name: "",
        		path: "",
        		count: 0
        	},
        ]
    },
    {
        name: "Сильная кислота",
        path: resources_path+"Strong_Acid.jpg",
        type: "особый",
        receipt: [
        	{
        		name: "",
        		path: "",
        		count: 0
        	},
        ]
    }, 
    {
        name: "Живое дерево",
        path: resources_path+"Living_Tree.jpg",
        type: "особый",
        receipt: [
        	{
        		name: "",
        		path: "",
        		count: 0
        	},
        ]
    }, 
    {
        name: "Звездная пыль",
        path: resources_path+"Stardust.jpg",
        type: "особый",
        receipt: [
        	{
        		name: "",
        		path: "",
        		count: 0
        	},
        ]
    }, 
    {
        name: "Шерстяное полотно",
        path: resources_path+"Wool_Fabric.jpg",
        type: "особый",
        receipt: [
        	{
        		name: "",
        		path: "",
        		count: 0
        	},
        ]
    }, 
    {
        name: "Крепкая шкура",
        path: resources_path+"Torn_Hide.jpg",
        type: "особый",
        receipt: [
        	{
        		name: "",
        		path: "",
        		count: 0
        	},
        ]
    }, 
    {
        name: "Тонкая нить",
        path: resources_path+"Thin_Thread.jpg",
        type: "особый",
        receipt: [
        	{
        		name: "",
        		path: "",
        		count: 0
        	},
        ]
    },
    {
        name: "Эликсир трансформации",
        path: resources_path+"Transformation_Elixir.jpg",
        type: "редкий",
        receipt: null
    },
    {
        name: "Рунический свиток",
        path: resources_path+"Runic_Scroll.jpg",
        type: "редкий",
        receipt: null
    },
    {
        name: "Песок времени",
        path: resources_path+"Sands_Of_Time.jpg",
        type: "редкий",
        receipt: null
    },
    {
        name: "Звездная ткань",
        path: resources_path+"Starfabric.jpg",
        type: "редкий",
        receipt: null
    },
    {
        name: "Зачарованная нить",
        path: resources_path+"Enchanted_Thread.jpg",
        type: "редкий",
        receipt: null
    },    
    {
        name: "Живая настойка",
        path: resources_path+"Potion_of_Life.jpg",
        type: "редкий",
        receipt: null
    },
    {
        name: "Волшебная шкура",
        path: resources_path+"Magic_Hide.jpg",
        type: "редкий",
        receipt: null
    }, 
    {
        name: "Печать_чародея",
        path: resources_path+"Sorcerers_Seal.jpg",
        type: "редкий",
        receipt: null
    }, 
    {
        name: "Золотой слиток",
        path: resources_path+"Gold_Ingot.jpg",
        type: "редкий",
        receipt: null
    } 
]                                        


creatures = [
	{
		name: "Чемпион",
		file_path: creatures_path+"Champion.jpg",
		type: "легендарный",
		fraction: "Королевство",
		drop: [resources[resources_enum.Silver_Ingot], resources[resources_enum.Starfabric], resources[resources_enum.Wood]]
	},
	{
		name: "Архимаг",
		file_path: creatures_path+"Archmage.jpg",
		type: "легендарный",
		fraction: "Королевство",
		drop: [resources[resources_enum.Magical_Parchment], resources[resources_enum.Parchment], resources[resources_enum.Sands_Of_Time]]
	},
		{
		name: "Паладин",
		file_path: creatures_path+"Paladin.jpg",
		type: "легендарный",
		fraction: "Королевство",
		drop: [resources[resources_enum.Gold_Ingot], resources[resources_enum.Iron_Bar], resources[resources_enum.Silver_Ingot]]
	},
		{
		name: "Инквизитор",
		file_path: creatures_path+"Inquisitor.jpg",
		type: "особый",
		fraction: "Королевство",
		drop: [resources[resources_enum.Lesser_Magic_Seal], resources[resources_enum.Parchment], resources[resources_enum.Stardust]]
	},
		{
		name: "Морской волк",
		file_path: creatures_path+"Sea_Wolf.jpg",
		type: "особый",
		fraction: "Королевство",
		drop: [resources[resources_enum.Coarse_Thread], resources[resources_enum.Iron_Bar], resources[resources_enum.Silk_Fabric]]
	},
		{
		name: "Рыцарь",
		file_path: creatures_path+"Knight.jpg",
		type: "особый",
		fraction: "Королевство",
		drop: [resources[resources_enum.Iron_Bar],resources[resources_enum.Silver_Ingot],resources[resources_enum.Torn_Hide]]
	},
		{
		name: "Пушкарь",
		file_path: creatures_path+"Gunner.jpg",
		type: "особый",
		fraction: "Королевство",
		drop: [resources[resources_enum.Alchemists_Jar],resources[resources_enum.Magic_Powder],resources[resources_enum.Thin_Thread]]
	},
		{
		name: "Чернокнижник",
		file_path: creatures_path+"Blackmage.jpg",
		type: "особый",
		fraction: "Королевство",
		drop: [resources[resources_enum.Forest_Herbs],resources[resources_enum.Magical_Parchment],resources[resources_enum.Runic_Seal]]
	},
		{
		name: "Крестьянин",
		file_path: creatures_path+"Peasant.jpg",
		type: "рядовой",
		fraction: "Королевство",
		drop: [resources[resources_enum.Coarse_Thread],resources[resources_enum.Forest_Herbs],resources[resources_enum.Wood]]
	},
		{
		name: "Лучник",
		file_path: creatures_path+"Archer.jpg",
		type: "рядовой",
		fraction: "Королевство",
		drop: [resources[resources_enum.Coarse_Thread],resources[resources_enum.Linen_Fabric],resources[resources_enum.Parchment]]
	},
		{
		name: "Пират",
		file_path: creatures_path+"Pirate.jpg",
		type: "рядовой",
		fraction: "Королевство",
		drop: [resources[resources_enum.Alchemists_Jar],resources[resources_enum.Coarse_Thread],resources[resources_enum.Linen_Fabric],resources[resources_enum.Magic_Powder]]

	},
		{
		name: "Бродяга",
		file_path: creatures_path+"Vagabond.jpg",
		type: "рядовой",
		fraction: "Королевство",
		drop: [resources[resources_enum.Furs],resources[resources_enum.Iron_Bar],resources[resources_enum.Torn_Hide]]
	},
		{
		name: "Пилигрим",
		file_path: creatures_path+"Pilgrim.jpg",
		type: "рядовой",
		fraction: "Королевство",
		drop: [resources[resources_enum.Lesser_Magic_Seal],resources[resources_enum.Magic_Powder],resources[resources_enum.Parchment]]
	},
		{
		name: "Мечник",
		file_path: creatures_path+"Swordsman.jpg",
		type: "рядовой",
		fraction: "Королевство",
		drop: [resources[resources_enum.Iron_Bar],resources[resources_enum.Lesser_Magic_Seal]]
	},
		{
		name: "Ассасин",
		file_path: creatures_path+"Assassin.jpg",
		type: "легендарный",
		fraction: "Хаос",
		drop: [resources[resources_enum.Parchment],resources[resources_enum.Silk_Fabric],resources[resources_enum.Transformation_Elixir]]

	},
		{
		name: "Демонолог",
		file_path: creatures_path+"Demonologist.jpg",
		type: "легендарный",
		fraction: "Хаос",
		drop: [resources[resources_enum.Linen_Fabric],resources[resources_enum.Runic_Seal],resources[resources_enum.Sorcerers_Seal]]

	},
		{
		name: "Темный грифон",
		file_path: creatures_path+"Dark_Griffin.jpg",
		type: "легендарный",
		fraction: "Хаос",
		drop: [resources[resources_enum.Furs],resources[resources_enum.Magic_Hide],resources[resources_enum.Tough_Hide],resources[resources_enum.Wool_Fabric]]

	},
		{
		name: "Герцог тьмы",
		file_path: creatures_path+"Duke_of_Darkness.jpg",
		type: "легендарный",
		fraction: "Хаос",
		drop: [resources[resources_enum.Lesser_Magic_Seal],resources[resources_enum.Strong_Acid],resources[resources_enum.Starfabric]]

	},
		{
		name: "Огненный паук",
		file_path: creatures_path+"Fiery_Spider.jpg",
		type: "особый",
		fraction: "Хаос",
		drop: [resources[resources_enum.Furs],resources[resources_enum.Thin_Thread],resources[resources_enum.Torn_Hide]]

	},
		{
		name: "Черный единорог",
		file_path: creatures_path+"Black_Unicorn.jpg",
		type: "особый",
		fraction: "Хаос",
		drop: [resources[resources_enum.Forest_Herbs],resources[resources_enum.Lesser_Magic_Seal],resources[resources_enum.Strong_Acid]]

	},
		{
		name: "Изобретатель",
		file_path: creatures_path+"Inventor.jpg",
		type: "особый",
		fraction: "Хаос",
		drop: [resources[resources_enum.Iron_Bar],resources[resources_enum.Parchment],resources[resources_enum.Water_Resistant_Paint]]

	},
		{
		name: "Некромант",
		file_path: creatures_path+"Necromancer.jpg",
		type: "особый",
		fraction: "Хаос",
		drop: [resources[resources_enum.Linen_Fabric],resources[resources_enum.Magical_Parchment],resources[resources_enum.Runic_Seal]]

	},
		{
		name: "Злобоглаз",
		file_path: creatures_path+"Evil_Eye.jpg",
		type: "особый",
		fraction: "Хаос",
		drop: [resources[resources_enum.Lesser_Magic_Seal],resources[resources_enum.Magic_Powder],resources[resources_enum.Stardust],resources[resources_enum.Tough_Hide]]

	},
		{
		name: "Пещерный паук",
		file_path: creatures_path+"Cave_Spider.jpg",
		type: "рядовой",
		fraction: "Хаос",
		drop: [resources[resources_enum.Alchemists_Jar],resources[resources_enum.Coarse_Thread],resources[resources_enum.Furs]]
	},
		{
		name: "Дикий медведь",
		file_path: creatures_path+"Possessed_Bear.jpg",
		type: "рядовой",
		fraction: "Хаос",
		drop: [resources[resources_enum.Furs],resources[resources_enum.Torn_Hide]]

	},
		{
		name: "Звероглаз",
		file_path: creatures_path+"Eyebeast.jpg",
		type: "рядовой",
		fraction: "Хаос",
		drop: [resources[resources_enum.Magic_Powder],resources[resources_enum.Torn_Hide]]

	},
		{
		name: "Призрак",
		file_path: creatures_path+"Ghost.jpg",
		type: "рядовой",
		fraction: "Хаос",
		drop: [resources[resources_enum.Lesser_Magic_Seal],resources[resources_enum.Linen_Fabric],resources[resources_enum.Magic_Powder]]

	},
		{
		name: "Зомби",
		file_path: creatures_path+"Zombie.jpg",
		type: "рядовой",
		fraction: "Хаос",
		drop: [resources[resources_enum.Iron_Bar],resources[resources_enum.Parchment],resources[resources_enum.Wood]]

	},
		{
		name: "Алхимик",
		file_path: creatures_path+"Alchemist.jpg",
		type: "рядовой",
		fraction: "Хаос",
		drop: [resources[resources_enum.Alchemists_Jar],resources[resources_enum.Coarse_Thread],resources[resources_enum.Forest_Herbs]]

	},
		{
		name: "Горгул-шаман",
		file_path: creatures_path+"Gargoyle_Shaman.jpg",
		type: "легендарный",
		fraction: "Древние",
		drop: [resources[resources_enum.Forest_Herbs],resources[resources_enum.Runic_Scroll],resources[resources_enum.Runic_Seal]]

	},
		{
		name: "Древний энт",
		file_path: creatures_path+"Ancient_Ent.jpg",
		type: "легендарный",
		fraction: "Древние",
		drop: [resources[resources_enum.Living_Tree],resources[resources_enum.Potion_of_Life],resources[resources_enum.Wood]]

	},
		{
		name: "Дриада",
		file_path: creatures_path+"Dryad.jpg",
		type: "легендарный",
		fraction: "Древние",
		drop: [resources[resources_enum.Enchanted_Thread],resources[resources_enum.Stardust],resources[resources_enum.Thin_Thread]]
	},
		{
		name: "Седогривый грифон",
		file_path: creatures_path+"Greymaned_Griffin.jpg",
		type: "легендарный",
		fraction: "Древние",
		drop: [resources[resources_enum.Linen_Fabric],resources[resources_enum.Silver_Ingot],resources[resources_enum.Sands_Of_Time]]

	},
		{
		name: "Озерная фея",
		file_path: creatures_path+"Lake_Fairy.jpg",
		type: "особый",
		fraction: "Древние",
		drop: [resources[resources_enum.Magic_Powder],resources[resources_enum.Magical_Parchment],resources[resources_enum.Strong_Acid]]

	},
		{
		name: "Горгул-охотник",
		file_path: creatures_path+"Gargoyle_Hunter.jpg",
		type: "особый",
		fraction: "Древние",
		drop: [resources[resources_enum.Living_Tree],resources[resources_enum.Torn_Hide],resources[resources_enum.Wood]]

	},
		{
		name: "Хранитель леса",
		file_path: creatures_path+"Forest_Guardian.jpg",
		type: "особый",
		fraction: "Древние",
		drop: [resources[resources_enum.Lesser_Magic_Seal],resources[resources_enum.Parchment],resources[resources_enum.Stardust]]

	},
		{
		name: "Следопыт",
		file_path: creatures_path+"Ranger.jpg",
		type: "особый",
		fraction: "Древние",
		drop: [resources[resources_enum.Alchemists_Jar],resources[resources_enum.Coarse_Thread],resources[resources_enum.Wool_Fabric]]

	},
		{
		name: "Ночной волк",
		file_path: creatures_path+"Nigh_Wolf.jpg",
		type: "особый",
		fraction: "Древние",
		drop: [resources[resources_enum.Linen_Fabric],resources[resources_enum.Furs],resources[resources_enum.Water_Resistant_Paint]]

	},
		{
		name: "Молодая фея",
		file_path: creatures_path+"Young_Fairy.jpg",
		type: "рядовой",
		fraction: "Древние",
		drop: [resources[resources_enum.Forest_Herbs],resources[resources_enum.Linen_Fabric],resources[resources_enum.Magic_Powder]]

	},
		{
		name: "Горгул-ученик",
		file_path: creatures_path+"Gargoyle_Trainee.jpg",
		type: "рядовой",
		fraction: "Древние",
		drop: [resources[resources_enum.Iron_Bar],resources[resources_enum.Lesser_Magic_Seal],resources[resources_enum.Wood]]

	},
		{
		name: "Единорог",
		file_path: creatures_path+"Unicorn.jpg",
		type: "рядовой",
		fraction: "Древние",
		drop: [resources[resources_enum.Forest_Herbs],resources[resources_enum.Furs],resources[resources_enum.Magic_Powder]]

	},
		{
		name: "Друид",
		file_path: creatures_path+"Druid.jpg",
		type: "рядовой",
		fraction: "Древние",
		drop: [resources[resources_enum.Coarse_Thread],resources[resources_enum.Lesser_Magic_Seal],resources[resources_enum.Parchment]]

	},
		{
		name: "Циклоп",
		file_path: creatures_path+"Cyclops.jpg",
		type: "легендарный",
		fraction: "Звери",
		drop: [resources[resources_enum.Iron_Bar],resources[resources_enum.Runic_Seal],resources[resources_enum.Transformation_Elixir]]

	},
		{
		name: "Изумрудный дракон",
		file_path: creatures_path+"Emerald_Dragon.jpg",
		type: "легендарный",
		fraction: "Звери",
		drop: [resources[resources_enum.Magic_Hide],resources[resources_enum.Torn_Hide],resources[resources_enum.Tough_Hide]]

	},
		{
		name: "Тирекс",
		file_path: creatures_path+"TRex.jpg",
		type: "легендарный",
		fraction: "Звери",
		drop: [resources[resources_enum.Forest_Herbs],resources[resources_enum.Wool_Fabric],resources[resources_enum.Potion_of_Life]]
	},
		{
		name: "Королевская терния",
		file_path: creatures_path+"Royal_Thorn.jpg",
		type: "особый",
		fraction: "Звери",
		drop: [resources[resources_enum.Living_Tree],resources[resources_enum.Magic_Powder],resources[resources_enum.Wood]]

	},
		{
		name: "Древняя змея",
		file_path: creatures_path+"Ancient_Serpent.jpg",
		type: "особый",
		fraction: "Звери",
		drop: [resources[resources_enum.Alchemists_Jar],resources[resources_enum.Lesser_Magic_Seal],resources[resources_enum.Tough_Hide]]

	},
		{
		name: "Морской дьявол",
		file_path: creatures_path+"Sea_Devil.jpg",
		type: "особый",
		fraction: "Звери",
		drop: [resources[resources_enum.Coarse_Thread],resources[resources_enum.Iron_Bar],resources[resources_enum.Water_Resistant_Paint]]

	},
		{
		name: "Северный медведь",
		file_path: creatures_path+"Polar_Bear.jpg",
		type: "особый",
		fraction: "Звери",
		drop: [resources[resources_enum.Furs],resources[resources_enum.Lesser_Magic_Seal],resources[resources_enum.Tough_Hide]]

	},
		{
		name: "Терния-охотник",
		file_path: creatures_path+"Thorn_Hunter.jpg",
		type: "рядовой",
		fraction: "Звери",
		drop: [resources[resources_enum.Forest_Herbs],resources[resources_enum.Wood],resources[resources_enum.Alchemists_Jar]]

	},
		{
		name: "Озерный драконид",
		file_path: creatures_path+"Lake_Draconid.jpg",
		type: "рядовой",
		fraction: "Звери",
		drop: [resources[resources_enum.Coarse_Thread],resources[resources_enum.Magic_Powder],resources[resources_enum.Torn_Hide]]

	},
		{
		name: "Бронтор",
		file_path: creatures_path+"Brontaur.jpg",
		type: "рядовой",
		fraction: "Звери",
		drop: [resources[resources_enum.Forest_Herbs],resources[resources_enum.Torn_Hide]]

	},
		{
		name: "Болотная змея",
		file_path: creatures_path+"Swamp_Serpent.jpg",
		type: "рядовой",
		fraction: "Звери",
		drop: [resources[resources_enum.Alchemists_Jar],resources[resources_enum.Torn_Hide]]

	}
]



function modal_content(resItem){
	var item = _.find(resources, function(i){ return i.name == resItem; })
	if(item == 'undefined' || item == null)
		alert("modal_content, item is null or undefined");
	item.drop = _.filter(creatures, function(mob) { return _.contains(_.pluck(mob.drop, "name"), item.name); });
	
    var dialog_Data = _.template(
	$( "script.template_more_box_res" ).html() );
    $( "#more_body" ).html( dialog_Data( item ) );	
}

			    

$( document ).ready(function() {
 	
 	_.templateSettings.variable = "rc"; 
    
    // РЕСУРСЫ
    var resData = _.
    template(
        $( "script.template_res" ).html()
    );
 
    var simple_res = {
        resTitle: "Обычные ресурсы",
        resItems: _.filter(resources, function(item){ return item.type == "обычный"; })
    }; 
	var rare_res = {
	        resTitle: "Особые ресурсы",
	        resItems: _.filter(resources, function(item){ return item.type == "особый"; })
	};
    var unique_res = {
        resTitle: "Редкие ресурсы",
        resItems: _.filter(resources, function(item){ return item.type == "редкий"; })
    };
 
    $( "#simple_res" ).html( resData( simple_res ) );
    $( "#rare_res" ).html( resData( rare_res ) );
    $( "#unique_res" ).html( resData( unique_res ) );


    //СОЗДАНИЯ
    var creaturesData = _.template(
        $( "script.template_creatures" ).html()
    );

    var kingdom_creatures = {
        title: "Королевство",
        items: _.filter(creatures, function(item){ return item.fraction == "Королевство"; })
    }; 

    var chaos_creatures = {
        title: "Хаос",
        items: _.filter(creatures, function(item){ return item.fraction == "Хаос"; })
    };     
    var ancient_creatures = {
        title: "Древние",
        items: _.filter(creatures, function(item){ return item.fraction == "Древние"; })
    };  
    var animal_creatures = {
        title: "Звери",
        items: _.filter(creatures, function(item){ return item.fraction == "Звери"; })
    };             

    $( "#kingdom_creatures" ).html( creaturesData( animal_creatures ) );

    //tooltips
	$('a.resource > img').each(function(){
		$(this).tooltip({html:true, placement: "bottom", title: this.alt});
	});
});  
 
 