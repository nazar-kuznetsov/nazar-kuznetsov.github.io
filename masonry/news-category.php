  <?php include 'tab-links.php'; ?>

    <!-- Новости в 3 колонки -->
    <section class="category-all-news">
      <div class="container">
        <h1 class="category-all-news-title"></h1>
        <ul id="masonry-news" class="category-news-post-list grid">
            <li class="grid-sizer"></li>
  			<li class="gutter-sizer"></li>
          <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
            <li class="grid-item">
              <a href="<?php the_permalink(); ?>">
                <div class="category-news-post__img">
                  <?php the_post_thumbnail('large'); ?>
                </div>
              </a>
              <div class="category-news-post__desc">
                <h3 class="category-news-post__title">
                  <a href="<?php the_permalink(); ?>"><?php the_title( ); ?> <i class="fa fa-hidden <?php the_field('post_icon'); ?>" aria-hidden="true"></i> <i class="fa <?php the_field('post_icon'); ?>" aria-hidden="true"></i></a>
                </h3>
                <span class="middle-news-article-date"><?php the_time('d.m.Y'); ?></span>
              </div>
            </li>
          <?php endwhile; ?>
              <?php else : ?>
                <h2 class="not-found-posts-title">Матеріалу не знайдено</h2>
              <?php endif; ?>
          <?php if (function_exists('wp_corenavi')) wp_corenavi(); ?>
        </ul>
      </div>
    </section>
    </div>
  <!--/wrapper-->

  <!-- FOOTER -->