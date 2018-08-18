<?php
	add_theme_support( 'menus' );
	add_theme_support( 'post-thumbnails' );

	add_image_size( 'full-img', 1920, 1080, true );
	add_image_size( 'main-slider-img', 900, 500, true );
	add_image_size( 'vertical-sm-img', 300, 500, true );
	add_image_size( 'category-news-img', 460, 460, true );
	add_image_size( 'about-slider-img', 1000, 700, true );

	function theme_name_scripts() {

		wp_enqueue_style( 'main-style', get_template_directory_uri() . '/css/style.css');

		wp_deregister_script( 'jquery' );
		wp_deregister_script( 'wp-embed' );

		wp_register_script( 'jquery', get_template_directory_uri() . '/js/libs/jquery-3.2.1.min.js' );
		wp_enqueue_script( 'jquery', get_template_directory_uri() . '/js/libs/jquery-3.2.1.min.js', array(), '3.2.1', true );
		wp_enqueue_script( 'migrate', get_template_directory_uri() . '/js/libs/jquery-migrate-3.0.0.min.js', array(), '3.0.0', true );
		wp_enqueue_script( 'slick_js', get_template_directory_uri() . '/js/libs/slick.min.js', array(), '1.0', true );
		wp_enqueue_script( 'main_js', get_template_directory_uri() . '/js/scripts.min.js', array(), '1.0', true );

		if ( is_page_template( 'page-ask-template.php') ) {
 			wp_enqueue_script( 'ask_page', get_template_directory_uri() . '/js/form-validation.js', array(), '1.0', true );
		}


		if ( is_post_type_archive('news')) {
			wp_enqueue_script( 'masonry', get_template_directory_uri() . '/js/libs/masonry.js', array(), '1.0', true );
			wp_enqueue_script( 'imagesLoaded', get_template_directory_uri() . '/js/libs/imagesLoaded.js', array(), '1.0', true );
			wp_enqueue_script( 'masonry-common', get_template_directory_uri() . '/js/libs/masonry-common.js', array(), '1.0', true );
		}

		if ( is_post_type_archive('calendar') || is_tax('calendar-institution') || is_tax('calendar-mounth') || is_tax('calendar-year') ){
			wp_enqueue_script( 'calendar_js', get_template_directory_uri() . '/js/calendar.js', array(), '1.0', true );
		}
	}
	add_action( 'wp_enqueue_scripts', 'theme_name_scripts' );

	// Disable emoji

	remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
	remove_action( 'admin_print_scripts', 'print_emoji_detection_script' );
	remove_action( 'wp_print_styles', 'print_emoji_styles' );
	remove_action( 'admin_print_styles', 'print_emoji_styles' );

	// Remove posts and comments from admin menu

	function post_remove ()
	{
	   remove_menu_page('edit.php');
	   remove_menu_page('edit-comments.php');
	}
	add_action('admin_menu', 'post_remove');

	// Fix active class for custom post type
	function custom_active_item_classes($classes = array(), $menu_item = false){
	        global $post;
	        $classes[] = ($menu_item->url == get_post_type_archive_link($post->post_type)) ? 'current-menu-item-parent' : '';
	        return $classes;
	    }
	add_filter( 'nav_menu_css_class', 'custom_active_item_classes', 10, 2 );

	// Register news post type
	function news_register_post_type_init() {
		$labels = array(
			'name' => 'Новини',
			'singular_name' => 'Новини', // админ панель Добавить->Функцию
			'add_new' => 'Додати новину',
			'add_new_item' => 'Додати новину', // заголовок тега <title>
			'edit_item' => 'Редагувати новину',
			'new_item' => 'Нова новина',
			'all_items' => 'Всі новини',
			'view_item' => 'Переглянути новину',
			'search_items' => 'Знайти новину',
			'not_found' =>  'Новина не знайдена.',
			'not_found_in_trash' => 'There are no posts in trash.',
			'menu_name' => 'Новини' // ссылка в меню в админке
		);
		$args = array(
			'labels' => $labels,
			'public' => true,
			'show_ui' => true, // показывать интерфейс в админке
			'has_archive' => true,
			'menu_icon' => 'dashicons-media-document', // иконка в меню
			'menu_position' => 4, // порядок в меню
			'supports' => array( 'title', 'editor', 'thumbnail'),
			'show_in_nav_menus' => true,
			'show_in_menu' => true
		);
		register_post_type('news', $args);
	}

	add_action( 'init', 'news_register_post_type_init' );

	// Register category taxonomy for news
	function add_news_category_taxonomie() {
	/* создаем функцию с произвольным именем и вставляем
	в неё register_taxonomy() */
		register_taxonomy('news-category',
			array('news'),
			array(
				'hierarchical' => true,
				/* true - по типу рубрик, false - по типу меток,
				по умолчанию - false */
				'labels' => array(
					/* ярлыки, нужные при создании UI, можете
					не писать ничего, тогда будут использованы
					ярлыки по умолчанию */
					'name' => 'Категорії новин',
					'singular_name' => 'Категорії',
					'search_items' =>  'Знайти категорії',
					'popular_items' => 'Популярні категорії',
					'all_items' => 'Всі категорії',
					'parent_item' => null,
					'parent_item_colon' => null,
					'edit_item' => 'Редагувати категорії',
					'update_item' => 'Оновити категорію',
					'add_new_item' => 'Додати нову категорію',
					'new_item_name' => 'Нова категорія',
					'separate_items_with_commas' => 'Separate projects with commas',
					'add_or_remove_items' => 'Додати або видалити категорію',
					'choose_from_most_used' => 'Choose from most used projects',
					'menu_name' => 'Категорії новин'
				),
				'public' => true,
				/* каждый может использовать таксономию, либо
				только администраторы, по умолчанию - true */
				'show_in_nav_menus' => true,
				/* добавить на страницу создания меню */
				'show_ui' => true,
				/* добавить интерфейс создания и редактирования */
				'show_tagcloud' => false,
				/* нужно ли разрешить облако тегов для этой таксономии */
				'update_count_callback' => '_update_post_term_count',
				/* callback-функция для обновления счетчика $object_type */
				'query_var' => true,
				/* разрешено ли использование query_var, также можно
				указать строку, которая будет использоваться в качестве
				него, по умолчанию - имя таксономии */
				'rewrite' => array(
				/* настройки URL пермалинков */
					'slug' => 'news-category', // ярлык
					'hierarchical' => false // разрешить вложенность
				),
			)
		);
	}

	add_action( 'init', 'add_news_category_taxonomie', 0 );

	// Register vacancies post type
	function vacancies_register_post_type_init() {
		$labels = array(
			'name' => 'Вакансії',
			'singular_name' => 'Вакансії', // админ панель Добавить->Функцию
			'add_new' => 'Додати вакансію',
			'add_new_item' => 'Додати вакансію', // заголовок тега <title>
			'edit_item' => 'Редагувати вакансію',
			'new_item' => 'Нова вакансія',
			'all_items' => 'Всі вакансії',
			'view_item' => 'Переглянути вакансію',
			'search_items' => 'Знайти вакансію',
			'not_found' =>  'Вакансію не знайдена.',
			'not_found_in_trash' => 'There are no posts in trash.',
			'menu_name' => 'Вакансії' // ссылка в меню в админке
		);
		$args = array(
			'labels' => $labels,
			'public' => true,
			'show_ui' => true, // показывать интерфейс в админке
			'has_archive' => true,
			'menu_icon' => 'dashicons-id', // иконка в меню
			'menu_position' => 5, // порядок в меню
			'supports' => array( 'title', 'editor', 'thumbnail'),
			'show_in_nav_menus' => true,
			'show_in_menu' => true
		);
		register_post_type('vacancies', $args);
	}

	add_action( 'init', 'vacancies_register_post_type_init' );

	// Register calendar post type

	function calendar_register_post_type_init() {
		$labels = array(
			'name' => 'Календар весіль',
			'singular_name' => 'Календар весіль', // админ панель Добавить->Функцию
			'add_new' => 'Додати запис',
			'add_new_item' => 'Додати новий запис', // заголовок тега <title>
			'edit_item' => 'Редагувати запис',
			'new_item' => 'Новий запис',
			'all_items' => 'Всі записи',
			'view_item' => 'Подивитись записи',
			'search_items' => 'Знайти запис',
			'not_found' =>  'Записів не знайдено.',
			'not_found_in_trash' => 'There are no posts in trash.',
			'menu_name' => 'Календар весіль' // ссылка в меню в админке
		);
		$args = array(
			'labels' => $labels,
			'public' => true,
			'show_ui' => true, // показывать интерфейс в админке
			'has_archive' => true,
			'menu_icon' => 'dashicons-calendar-alt', // иконка в меню
			'menu_position' => 6, // порядок в меню
			'supports' => array( 'title', 'editor', 'thumbnail'),
			'show_in_nav_menus' => true,
			'show_in_menu' => true
		);
		register_post_type('calendar', $args);
	}

	add_action( 'init', 'calendar_register_post_type_init' );

	// Register category taxonomy for calendar
	function add_calendar_institution_taxonomie() {
	/* создаем функцию с произвольным именем и вставляем
	в неё register_taxonomy() */
		register_taxonomy('calendar-institution',
			array('calendar'),
			array(
				'hierarchical' => true,
				/* true - по типу рубрик, false - по типу меток,
				по умолчанию - false */
				'labels' => array(
					/* ярлыки, нужные при создании UI, можете
					не писать ничего, тогда будут использованы
					ярлыки по умолчанию */
					'name' => 'Установи',
					'singular_name' => 'Установи',
					'search_items' =>  'Знайти установу',
					'popular_items' => 'Популярні установи',
					'all_items' => 'Всі установи',
					'parent_item' => null,
					'parent_item_colon' => null,
					'edit_item' => 'Редагувати установу',
					'update_item' => 'Оновити установи',
					'add_new_item' => 'Додати нову установу',
					'new_item_name' => 'Нова установа назва',
					'separate_items_with_commas' => 'Separate categories with commas',
					'add_or_remove_items' => 'Додати чи видалити установу',
					'choose_from_most_used' => 'Обрати серед популярних установ',
					'menu_name' => 'Установи'
				),
				'public' => true,
				/* каждый может использовать таксономию, либо
				только администраторы, по умолчанию - true */
				'show_in_nav_menus' => true,
				/* добавить на страницу создания меню */
				'show_ui' => true,
				/* добавить интерфейс создания и редактирования */
				'show_tagcloud' => false,
				/* нужно ли разрешить облако тегов для этой таксономии */
				'update_count_callback' => '_update_post_term_count',
				/* callback-функция для обновления счетчика $object_type */
				'query_var' => true,
				/* разрешено ли использование query_var, также можно
				указать строку, которая будет использоваться в качестве
				него, по умолчанию - имя таксономии */
				'rewrite' => array(
				/* настройки URL пермалинков */
					'slug' => 'calendar-institution', // ярлык
					'hierarchical' => false // разрешить вложенность
				),
			)
		);
	}

	add_action( 'init', 'add_calendar_institution_taxonomie', 0 );

	// Register category taxonomy for calendar
	function add_calendar_year_taxonomie() {
	/* создаем функцию с произвольным именем и вставляем
	в неё register_taxonomy() */
		register_taxonomy('calendar-year',
			array('calendar'),
			array(
				'hierarchical' => true,
				/* true - по типу рубрик, false - по типу меток,
				по умолчанию - false */
				'labels' => array(
					/* ярлыки, нужные при создании UI, можете
					не писать ничего, тогда будут использованы
					ярлыки по умолчанию */
					'name' => 'Рік',
					'singular_name' => 'Рік',
					'search_items' =>  'Знайти рік',
					'popular_items' => 'Популярні роки',
					'all_items' => 'Всі роки',
					'parent_item' => null,
					'parent_item_colon' => null,
					'edit_item' => 'Редагувати рік',
					'update_item' => 'Оновити рік',
					'add_new_item' => 'Додати новий рік',
					'new_item_name' => 'Новий рік назва',
					'separate_items_with_commas' => 'Separate categories with commas',
					'add_or_remove_items' => 'Додати чи видалити рік',
					'choose_from_most_used' => 'Обрати серед популярних років',
					'menu_name' => 'Рік'
				),
				'public' => true,
				/* каждый может использовать таксономию, либо
				только администраторы, по умолчанию - true */
				'show_in_nav_menus' => true,
				/* добавить на страницу создания меню */
				'show_ui' => true,
				/* добавить интерфейс создания и редактирования */
				'show_tagcloud' => false,
				/* нужно ли разрешить облако тегов для этой таксономии */
				'update_count_callback' => '_update_post_term_count',
				/* callback-функция для обновления счетчика $object_type */
				'query_var' => true,
				/* разрешено ли использование query_var, также можно
				указать строку, которая будет использоваться в качестве
				него, по умолчанию - имя таксономии */
				'rewrite' => array(
				/* настройки URL пермалинков */
					'slug' => 'calendar-year', // ярлык
					'hierarchical' => false // разрешить вложенность
				),
			)
		);
	}

	add_action( 'init', 'add_calendar_year_taxonomie', 0 );

	// Register category taxonomy for calendar
	function add_calendar_mounth_taxonomie() {
	/* создаем функцию с произвольным именем и вставляем
	в неё register_taxonomy() */
		register_taxonomy('calendar-mounth',
			array('calendar'),
			array(
				'hierarchical' => true,
				/* true - по типу рубрик, false - по типу меток,
				по умолчанию - false */
				'labels' => array(
					/* ярлыки, нужные при создании UI, можете
					не писать ничего, тогда будут использованы
					ярлыки по умолчанию */
					'name' => 'Місяць',
					'singular_name' => 'Місяць',
					'search_items' =>  'Знайти місяць',
					'popular_items' => 'Популярні місяці',
					'all_items' => 'Всі роки',
					'parent_item' => null,
					'parent_item_colon' => null,
					'edit_item' => 'Редагувати місяць',
					'update_item' => 'Оновити місяць',
					'add_new_item' => 'Додати новий місяць',
					'new_item_name' => 'Новий місяць назва',
					'separate_items_with_commas' => 'Separate categories with commas',
					'add_or_remove_items' => 'Додати чи видалити місяць',
					'choose_from_most_used' => 'Обрати серед популярних місяців',
					'menu_name' => 'Місяць'
				),
				'public' => true,
				/* каждый может использовать таксономию, либо
				только администраторы, по умолчанию - true */
				'show_in_nav_menus' => true,
				/* добавить на страницу создания меню */
				'show_ui' => true,
				/* добавить интерфейс создания и редактирования */
				'show_tagcloud' => false,
				/* нужно ли разрешить облако тегов для этой таксономии */
				'update_count_callback' => '_update_post_term_count',
				/* callback-функция для обновления счетчика $object_type */
				'query_var' => true,
				/* разрешено ли использование query_var, также можно
				указать строку, которая будет использоваться в качестве
				него, по умолчанию - имя таксономии */
				'rewrite' => array(
				/* настройки URL пермалинков */
					'slug' => 'calendar-mounth', // ярлык
					'hierarchical' => false // разрешить вложенность
				),
			)
		);
	}

	add_action( 'init', 'add_calendar_mounth_taxonomie', 0 );

	// ACF option pages change quote-of-the-week
	if( function_exists('acf_add_options_page') ) {
	    $option_page = acf_add_options_page(array(
	        'page_title'     => 'Контактні дані',
	        'menu_title'     => 'Контактні дані',
	        'menu_slug'     => 'contact-page',
	        'capability'     => 'edit_posts',
	        'redirect'     => false,
	        'position' => '8',
	        'icon_url' => 'dashicons-email'
	    ));
	}
	// ACF option pages change quote-of-the-week
	if( function_exists('acf_add_options_page') ) {
	    $option_page = acf_add_options_page(array(
	        'page_title'     => 'Корисні посилання',
	        'menu_title'     => 'Корисні посилання',
	        'menu_slug'     => 'useful-links',
	        'capability'     => 'edit_posts',
	        'redirect'     => false,
	        'position' => '9',
	        'icon_url' => 'dashicons-share'
	    ));
	}
	// ACF option pages change quote-of-the-week
	if( function_exists('acf_add_options_page') ) {
	    $option_page = acf_add_options_page(array(
	        'page_title'     => 'Меню',
	        'menu_title'     => 'Меню',
	        'menu_slug'     => 'main-menu',
	        'capability'     => 'edit_posts',
	        'redirect'     => false,
	        'position' => '9',
	        'icon_url' => 'dashicons-menu'
	    ));
	}

	// Page navigation
	function wp_corenavi() {
	  global $wp_query;
	  $pages = '';
	  $max = $wp_query->max_num_pages;
	  if (!$current = get_query_var('paged')) $current = 1;
	  $a['base'] = str_replace(999999999, '%#%', get_pagenum_link(999999999));
	  $a['total'] = $max;
	  $a['current'] = $current;

	  $total = 1; //1 - выводить текст "Страница N из N", 0 - не выводить
	  $a['mid_size'] = 3; //сколько ссылок показывать слева и справа от текущей
	  $a['end_size'] = 1; //сколько ссылок показывать в начале и в конце
	  $a['prev_text'] = '«'; //текст ссылки "Предыдущая страница"
	  $a['next_text'] = '»'; //текст ссылки "Следующая страница"

	  if ($max > 1) echo '<div class="navigation">';
	  if ($total == 1 && $max > 1) $pages = ''."\r\n";
	  echo $pages . paginate_links($a);
	  if ($max > 1) echo '</div>';
	}
