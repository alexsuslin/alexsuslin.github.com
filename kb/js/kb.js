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


 //РЕСУРСЫ
resources = [           
	{
        name: "Склянка алхимика",
        path: "img/res/склянка_алхимика.jpg",
        type: "обычный",
        description: "Можно заполучить в качестве трофея у алхимиков, пиратов и болотных змей.",
        receipt: null,
        price: 50
    },
    {
        name: "Малая печать магии",
        path: "img/res/малая_печать_магии.jpg",
        type: "обычный",
        receipt: null
    },
    {
        name: "Льняная ткань",
        path: "img/res/льняная_ткань.jpg",
        type: "обычный",
        receipt: null
    },
    {
        name: "Лесные травы",
        path: "img/res/лесные_травы.jpg",
        type: "Можно заполучить в качестве трофея у крестьян, терний-охотников и алхимиков.",
        receipt: null,
        price: 50
    },
    {
        name: "Мех",
        path: "img/res/мех.jpg",
        type: "обычный",
        receipt: null
    },
    {
        name: "Волшебный порошок",
        path: "img/res/волшебный_порошок.jpg",
        type: "обычный",
        receipt: null
    }, 
    {
        name: "Пергамент",
        path: "img/res/пергамент.jpg",
        type: "обычный",
        receipt: null
    }, 
    {
        name: "Железо",
        path: "img/res/железо.jpg",
        type: "обычный",
        receipt: null
    }, 
    {
        name: "Рваная шкура",
        path: "img/res/рваная_шкура.jpg",
        type: "обычный",
        receipt: null
    }, 
    {
        name: "Грубая нить",
        path: "img/res/грубая_нить.jpg",
        type: "обычный",
        receipt: null
    }, 
    {
        name: "Дерево",
        path: "img/res/дерево.jpg",
        type: "обычный",
        receipt: null
    },
	{
        name: "Шелковая ткань",
        path: "img/res/шелковая_ткань.jpg",
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
        path: "img/res/рунная_печать.jpg",
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
        path: "img/res/водостойкая_краска.jpg",
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
        path: "img/res/серебряный_слиток.jpg",
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
        path: "img/res/магический_пергамент.jpg",
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
        path: "img/res/сильная_кислота.jpg",
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
        path: "img/res/живое_дерево.jpg",
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
        path: "img/res/звездная_пыль.jpg",
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
        path: "img/res/шерстяное_полотно.jpg",
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
        path: "img/res/крепкая_шкура.jpg",
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
        path: "img/res/тонкая_нить.jpg",
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
        path: "img/res/эликсир_трансформации.jpg",
        type: "редкий",
        receipt: null
    },
    {
        name: "Рунический свиток",
        path: "img/res/рунический_свиток.jpg",
        type: "редкий",
        receipt: null
    },
    {
        name: "Песок времени",
        path: "img/res/песок_времени.jpg",
        type: "редкий",
        receipt: null
    },
    {
        name: "Звездная ткань",
        path: "img/res/звездная_ткань.jpg",
        type: "редкий",
        receipt: null
    },
    {
        name: "Зачарованная нить",
        path: "img/res/зачарованная_нить.jpg",
        type: "редкий",
        receipt: null
    },    
    {
        name: "Живая настойка",
        path: "img/res/живая_настойка.jpg",
        type: "редкий",
        receipt: null
    },
    {
        name: "Волшебная шкура",
        path: "img/res/волшебная_шкура.jpg",
        type: "редкий",
        receipt: null
    }, 
    {
        name: "Печать_чародея",
        path: "img/res/печать_чародея.jpg",
        type: "редкий",
        receipt: null
    }, 
    {
        name: "Золотой слиток",
        path: "img/res/золотой_слиток.jpg",
        type: "редкий",
        receipt: null
    } 
]                                        


creatures = [
	{
		name: "Чемпион",
		file_path: "img/creatures/Чемпион.jpg",
		type: "легендарный",
		fraction: "Королевство",
		drop: [resources[resources_enum.Silver_Ingot], resources[resources_enum.Starfabric], resources[resources_enum.Wood]]
	},
	{
		name: "Архимаг",
		file_path: "img/creatures/Архимаг.jpg",
		type: "легендарный",
		fraction: "Королевство",
		drop: [resources[resources_enum.Magical_Parchment], resources[resources_enum.Parchment], resources[resources_enum.Sands_Of_Time]]
	},
		{
		name: "Паладин",
		file_path: "img/creatures/Паладин.jpg",
		type: "легендарный",
		fraction: "Королевство",
		drop: [resources[resources_enum.Gold_Ingot], resources[resources_enum.Iron_Bar], resources[resources_enum.Silver_Ingot]]
	},
		{
		name: "Инквизитор",
		file_path: "img/creatures/Инквизитор.jpg",
		type: "особый",
		fraction: "Королевство",
		drop: [resources[resources_enum.Lesser_Magic_Seal], resources[resources_enum.Parchment], resources[resources_enum.Stardust]]
	},
		{
		name: "Морской волк",
		file_path: "img/creatures/Морской волк.jpg",
		type: "особый",
		fraction: "Королевство",
		drop: [resources[resources_enum.Coarse_Thread], resources[resources_enum.Iron_Bar], resources[resources_enum.Silk_Fabric]]
	},
		{
		name: "Рыцарь",
		file_path: "img/creatures/Рыцарь.jpg",
		type: "особый",
		fraction: "Королевство",
		drop: [resources[resources_enum.Iron_Bar],resources[resources_enum.Silver_Ingot],resources[resources_enum.Torn_Hide]]
	},
		{
		name: "Пушкарь",
		file_path: "img/creatures/Пушкарь.jpg",
		type: "особый",
		fraction: "Королевство",
		drop: [resources[resources_enum.Alchemists_Jar],resources[resources_enum.Magic_Powder],resources[resources_enum.Thin_Thread]]
	},
		{
		name: "Чернокнижник",
		file_path: "img/creatures/Чернокнижник.jpg",
		type: "особый",
		fraction: "Королевство",
		drop: [resources[resources_enum.Forest_Herbs],resources[resources_enum.Magical_Parchment],resources[resources_enum.Runic_Seal]]
	},
		{
		name: "Крестьянин",
		file_path: "img/creatures/Крестьянин.jpg",
		type: "рядовой",
		fraction: "Королевство",
		drop: [resources[resources_enum.Coarse_Thread],resources[resources_enum.Forest_Herbs],resources[resources_enum.Wood]]
	},
		{
		name: "Лучник",
		file_path: "img/creatures/Лучник.jpg",
		type: "рядовой",
		fraction: "Королевство",
		drop: [resources[resources_enum.Coarse_Thread],resources[resources_enum.Linen_Fabric],resources[resources_enum.Parchment]]
	},
		{
		name: "Пират",
		file_path: "img/creatures/Пират.jpg",
		type: "рядовой",
		fraction: "Королевство",
		drop: [resources[resources_enum.Alchemists_Jar],resources[resources_enum.Coarse_Thread],resources[resources_enum.Linen_Fabric],resources[resources_enum.Magic_Powder]]

	},
		{
		name: "Бродяга",
		file_path: "img/creatures/Бродяга.jpg",
		type: "рядовой",
		fraction: "Королевство",
		drop: [resources[resources_enum.Furs],resources[resources_enum.Iron_Bar],resources[resources_enum.Torn_Hide]]
	},
		{
		name: "Пилигрим",
		file_path: "img/creatures/Пилигрим.jpg",
		type: "рядовой",
		fraction: "Королевство",
		drop: [resources[resources_enum.Lesser_Magic_Seal],resources[resources_enum.Magic_Powder],resources[resources_enum.Parchment]]
	},
		{
		name: "Мечник",
		file_path: "img/creatures/Мечник.jpg",
		type: "рядовой",
		fraction: "Королевство",
		drop: [resources[resources_enum.Iron_Bar],resources[resources_enum.Lesser_Magic_Seal]]
	},
		{
		name: "Ассасин",
		file_path: "img/creatures/Ассасин.jpg",
		type: "легендарный",
		fraction: "Хаос",
		drop: [resources[resources_enum.Parchment],resources[resources_enum.Silk_Fabric],resources[resources_enum.Transformation_Elixir]]

	},
		{
		name: "Демонолог",
		file_path: "img/creatures/Демонолог.jpg",
		type: "легендарный",
		fraction: "Хаос",
		drop: [resources[resources_enum.Linen_Fabric],resources[resources_enum.Runic_Seal],resources[resources_enum.Sorcerers_Seal]]

	},
		{
		name: "Темный грифон",
		file_path: "img/creatures/Темный грифон.jpg",
		type: "легендарный",
		fraction: "Хаос",
		drop: [resources[resources_enum.Furs],resources[resources_enum.Magic_Hide],resources[resources_enum.Tough_Hide],resources[resources_enum.Wool_Fabric]]

	},
		{
		name: "Герцог тьмы",
		file_path: "img/creatures/Герцог тьмы.jpg",
		type: "легендарный",
		fraction: "Хаос",
		drop: [resources[resources_enum.Lesser_Magic_Seal],resources[resources_enum.Strong_Acid],resources[resources_enum.Starfabric]]

	},
		{
		name: "Огненный паук",
		file_path: "img/creatures/Огненный паук.jpg",
		type: "особый",
		fraction: "Хаос",
		drop: [resources[resources_enum.Furs],resources[resources_enum.Thin_Thread],resources[resources_enum.Torn_Hide]]

	},
		{
		name: "Черный единорог",
		file_path: "img/creatures/Черный единорог.jpg",
		type: "особый",
		fraction: "Хаос",
		drop: [resources[resources_enum.Forest_Herbs],resources[resources_enum.Lesser_Magic_Seal],resources[resources_enum.Strong_Acid]]

	},
		{
		name: "Изобретатель",
		file_path: "img/creatures/Изобретатель.jpg",
		type: "особый",
		fraction: "Хаос",
		drop: [resources[resources_enum.Iron_Bar],resources[resources_enum.Parchment],resources[resources_enum.Water_Resistant_Paint]]

	},
		{
		name: "Некромант",
		file_path: "img/creatures/Некромант.jpg",
		type: "особый",
		fraction: "Хаос",
		drop: [resources[resources_enum.Linen_Fabric],resources[resources_enum.Magical_Parchment],resources[resources_enum.Runic_Seal]]

	},
		{
		name: "Злобоглаз",
		file_path: "img/creatures/Злобоглаз.jpg",
		type: "особый",
		fraction: "Хаос",
		drop: [resources[resources_enum.Lesser_Magic_Seal],resources[resources_enum.Magic_Powder],resources[resources_enum.Stardust],resources[resources_enum.Tough_Hide]]

	},
		{
		name: "Пещерный паук",
		file_path: "img/creatures/Пещерный паук.jpg",
		type: "рядовой",
		fraction: "Хаос",
		drop: [resources[resources_enum.Alchemists_Jar],resources[resources_enum.Coarse_Thread],resources[resources_enum.Furs]]
	},
		{
		name: "Дикий медведь",
		file_path: "img/creatures/Дикий медведь.jpg",
		type: "рядовой",
		fraction: "Хаос",
		drop: [resources[resources_enum.Furs],resources[resources_enum.Torn_Hide]]

	},
		{
		name: "Звероглаз",
		file_path: "img/creatures/Звероглаз.jpg",
		type: "рядовой",
		fraction: "Хаос",
		drop: [resources[resources_enum.Magic_Powder],resources[resources_enum.Torn_Hide]]

	},
		{
		name: "Призрак",
		file_path: "img/creatures/Призрак.jpg",
		type: "рядовой",
		fraction: "Хаос",
		drop: [resources[resources_enum.Lesser_Magic_Seal],resources[resources_enum.Linen_Fabric],resources[resources_enum.Magic_Powder]]

	},
		{
		name: "Зомби",
		file_path: "img/creatures/Зомби.jpg",
		type: "рядовой",
		fraction: "Хаос",
		drop: [resources[resources_enum.Iron_Bar],resources[resources_enum.Parchment],resources[resources_enum.Wood]]

	},
		{
		name: "Алхимик",
		file_path: "img/creatures/Алхимик.jpg",
		type: "рядовой",
		fraction: "Хаос",
		drop: [resources[resources_enum.Alchemists_Jar],resources[resources_enum.Coarse_Thread],resources[resources_enum.Forest_Herbs]]

	},
		{
		name: "Горгул-шаман",
		file_path: "img/creatures/Горгул-шаман.jpg",
		type: "легендарный",
		fraction: "Древние",
		drop: [resources[resources_enum.Forest_Herbs],resources[resources_enum.Runic_Scroll],resources[resources_enum.Runic_Seal]]

	},
		{
		name: "Древний энт",
		file_path: "img/creatures/Древний энт.jpg",
		type: "легендарный",
		fraction: "Древние",
		drop: [resources[resources_enum.Living_Tree],resources[resources_enum.Potion_of_Life],resources[resources_enum.Wood]]

	},
		{
		name: "Дриада",
		file_path: "img/creatures/Дриада.jpg",
		type: "легендарный",
		fraction: "Древние",
		drop: [resources[resources_enum.Enchanted_Thread],resources[resources_enum.Stardust],resources[resources_enum.Thin_Thread]]
	},
		{
		name: "Седогривый грифон",
		file_path: "img/creatures/Седогривый грифон.jpg",
		type: "легендарный",
		fraction: "Древние",
		drop: [resources[resources_enum.Linen_Fabric],resources[resources_enum.Silver_Ingot],resources[resources_enum.Sands_Of_Time]]

	},
		{
		name: "Озерная фея",
		file_path: "img/creatures/Озерная фея.jpg",
		type: "особый",
		fraction: "Древние",
		drop: [resources[resources_enum.Magic_Powder],resources[resources_enum.Magical_Parchment],resources[resources_enum.Strong_Acid]]

	},
		{
		name: "Горгул-охотник",
		file_path: "img/creatures/Горгул-охотник.jpg",
		type: "особый",
		fraction: "Древние",
		drop: [resources[resources_enum.Living_Tree],resources[resources_enum.Torn_Hide],resources[resources_enum.Wood]]

	},
		{
		name: "Хранитель леса",
		file_path: "img/creatures/Хранитель леса.jpg",
		type: "особый",
		fraction: "Древние",
		drop: [resources[resources_enum.Lesser_Magic_Seal],resources[resources_enum.Parchment],resources[resources_enum.Stardust]]

	},
		{
		name: "Следопыт",
		file_path: "img/creatures/Следопыт.jpg",
		type: "особый",
		fraction: "Древние",
		drop: [resources[resources_enum.Alchemists_Jar],resources[resources_enum.Coarse_Thread],resources[resources_enum.Wool_Fabric]]

	},
		{
		name: "Ночной волк",
		file_path: "img/creatures/Ночной волк.jpg",
		type: "особый",
		fraction: "Древние",
		drop: [resources[resources_enum.Linen_Fabric],resources[resources_enum.Furs],resources[resources_enum.Water_Resistant_Paint]]

	},
		{
		name: "Молодая фея",
		file_path: "img/creatures/Молодая фея.jpg",
		type: "рядовой",
		fraction: "Древние",
		drop: [resources[resources_enum.Forest_Herbs],resources[resources_enum.Linen_Fabric],resources[resources_enum.Magic_Powder]]

	},
		{
		name: "Горгул-ученик",
		file_path: "img/creatures/Горгул-ученик.jpg",
		type: "рядовой",
		fraction: "Древние",
		drop: [resources[resources_enum.Iron_Bar],resources[resources_enum.Lesser_Magic_Seal],resources[resources_enum.Wood]]

	},
		{
		name: "Единорог",
		file_path: "img/creatures/Единорог.jpg",
		type: "рядовой",
		fraction: "Древние",
		drop: [resources[resources_enum.Forest_Herbs],resources[resources_enum.Furs],resources[resources_enum.Magic_Powder]]

	},
		{
		name: "Друид",
		file_path: "img/creatures/Друид.jpg",
		type: "рядовой",
		fraction: "Древние",
		drop: [resources[resources_enum.Coarse_Thread],resources[resources_enum.Lesser_Magic_Seal],resources[resources_enum.Parchment]]

	},
		{
		name: "Циклоп",
		file_path: "img/creatures/Циклоп.jpg",
		type: "легендарный",
		fraction: "Звери",
		drop: [resources[resources_enum.Iron_Bar],resources[resources_enum.Runic_Seal],resources[resources_enum.Transformation_Elixir]]

	},
		{
		name: "Изумрудный дракон",
		file_path: "img/creatures/Изумрудный дракон.jpg",
		type: "легендарный",
		fraction: "Звери",
		drop: [resources[resources_enum.Magic_Hide],resources[resources_enum.Torn_Hide],resources[resources_enum.Tough_Hide]]

	},
		{
		name: "Тирекс",
		file_path: "img/creatures/Тирекс.jpg",
		type: "легендарный",
		fraction: "Звери",
		drop: [resources[resources_enum.Forest_Herbs],resources[resources_enum.Wool_Fabric],resources[resources_enum.Potion_of_Life]]
	},
		{
		name: "Королевская терния",
		file_path: "img/creatures/Королевская терния.jpg",
		type: "особый",
		fraction: "Звери",
		drop: [resources[resources_enum.Living_Tree],resources[resources_enum.Magic_Powder],resources[resources_enum.Wood]]

	},
		{
		name: "Древняя змея",
		file_path: "img/creatures/Древняя змея.jpg",
		type: "особый",
		fraction: "Звери",
		drop: [resources[resources_enum.Alchemists_Jar],resources[resources_enum.Lesser_Magic_Seal],resources[resources_enum.Tough_Hide]]

	},
		{
		name: "Морской дьявол",
		file_path: "img/creatures/Морской дьявол.jpg",
		type: "особый",
		fraction: "Звери",
		drop: [resources[resources_enum.Coarse_Thread],resources[resources_enum.Iron_Bar],resources[resources_enum.Water_Resistant_Paint]]

	},
		{
		name: "Северный медведь",
		file_path: "img/creatures/Северный медведь.jpg",
		type: "особый",
		fraction: "Звери",
		drop: [resources[resources_enum.Furs],resources[resources_enum.Lesser_Magic_Seal],resources[resources_enum.Tough_Hide]]

	},
		{
		name: "Терния-охотник",
		file_path: "img/creatures/Терния-охотник.jpg",
		type: "рядовой",
		fraction: "Звери",
		drop: [resources[resources_enum.Forest_Herbs],resources[resources_enum.Wood],resources[resources_enum.Alchemists_Jar]]

	},
		{
		name: "Озерный драконид",
		file_path: "img/creatures/Озерный драконид.jpg",
		type: "рядовой",
		fraction: "Звери",
		drop: [resources[resources_enum.Coarse_Thread],resources[resources_enum.Magic_Powder],resources[resources_enum.Torn_Hide]]

	},
		{
		name: "Бронтор",
		file_path: "img/creatures/Бронтор.jpg",
		type: "рядовой",
		fraction: "Звери",
		drop: [resources[resources_enum.Forest_Herbs],resources[resources_enum.Torn_Hide]]

	},
		{
		name: "Болотная змея",
		file_path: "img/creatures/Болотная змея.jpg",
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
 
 