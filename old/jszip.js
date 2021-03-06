





<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">



  <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/frameworks-5b61aadc846f0818981ceec31b49c475fb084c163fdec5efbc2c21ef539092a9.css" integrity="sha256-W2Gq3IRvCBiYHO7DG0nEdfsITBY/3sXvvCwh71OQkqk=" media="all" rel="stylesheet" />
  <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github-c9c526463f5ffa74c1d350222904e12065e085b6bd4597c9a7b141dd53e24733.css" integrity="sha256-ycUmRj9f+nTB01AiKQThIGXghba9RZfJp7FB3VPiRzM=" media="all" rel="stylesheet" />
  
  
  
  

  <meta name="viewport" content="width=device-width">
  
  <title>jszip/jszip.min.js at v2.x · Stuk/jszip</title>
  <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
  <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
  <meta property="fb:app_id" content="1401488693436528">

    
    <meta content="https://avatars2.githubusercontent.com/u/48019?v=3&amp;s=400" property="og:image" /><meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="Stuk/jszip" property="og:title" /><meta content="https://github.com/Stuk/jszip" property="og:url" /><meta content="jszip - Create, read and edit .zip files with Javascript" property="og:description" />

  <link rel="assets" href="https://assets-cdn.github.com/">
  <link rel="web-socket" href="wss://live.github.com/_sockets/VjI6MTU5NzE4ODYwOmNiZmUyMTE1NjBlODc1NWY3NzE1Yjk5NDFjMTVjOGQzOTc4ODJkZmMwYjYyOWM0Mjc3ZTQ5NDliMDk4Y2UzOGY=--9bffc9a20cf2328c6773cdf5ef99a8798cb9bb33">
  <meta name="pjax-timeout" content="1000">
  <link rel="sudo-modal" href="/sessions/sudo_modal">
  <meta name="request-id" content="F575:1A122:74103E:BD0877:58D9F884" data-pjax-transient>
  

  <meta name="selected-link" value="repo_source" data-pjax-transient>

  <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
<meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
    <meta name="google-analytics" content="UA-3769691-2">

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="https://collector.githubapp.com/github-external/browser_event" name="octolytics-event-url" /><meta content="F575:1A122:74103E:BD0877:58D9F884" name="octolytics-dimension-request_id" /><meta content="21273320" name="octolytics-actor-id" /><meta content="enegence" name="octolytics-actor-login" /><meta content="4cee8a1da8322d6e28036e21ca28e23f3d5054ac05c2895235492c19687e8395" name="octolytics-actor-hash" />
<meta content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" name="analytics-location" />




  <meta class="js-ga-set" name="dimension1" content="Logged In">


  

      <meta name="hostname" content="github.com">
  <meta name="user-login" content="enegence">

      <meta name="expected-hostname" content="github.com">
    <meta name="js-proxy-site-detection-payload" content="NGVmM2ZjOWFlMzdkMWJmNGVjYjU4YmRiNWM5YTRjNTE3MmUwYzM1YzEyZjBiY2FiNDczOTU3MWVjMDI3MzhkMnx7InJlbW90ZV9hZGRyZXNzIjoiNDUuMjIuMTA1LjM3IiwicmVxdWVzdF9pZCI6IkY1NzU6MUExMjI6NzQxMDNFOkJEMDg3Nzo1OEQ5Rjg4NCIsInRpbWVzdGFtcCI6MTQ5MDY3OTk0MCwiaG9zdCI6ImdpdGh1Yi5jb20ifQ==">


  <meta name="html-safe-nonce" content="71be2722741a1e985dfee52dfd3f869eb2c7ed7d">

  <meta http-equiv="x-pjax-version" content="8567529326e069382fdf44816c65dc75">
  

    
  <meta name="description" content="jszip - Create, read and edit .zip files with Javascript">
  <meta name="go-import" content="github.com/Stuk/jszip git https://github.com/Stuk/jszip.git">

  <meta content="48019" name="octolytics-dimension-user_id" /><meta content="Stuk" name="octolytics-dimension-user_login" /><meta content="292525" name="octolytics-dimension-repository_id" /><meta content="Stuk/jszip" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="292525" name="octolytics-dimension-repository_network_root_id" /><meta content="Stuk/jszip" name="octolytics-dimension-repository_network_root_nwo" />
        <link href="https://github.com/Stuk/jszip/commits/v2.x.atom" rel="alternate" title="Recent Commits to jszip:v2.x" type="application/atom+xml">


    <link rel="canonical" href="https://github.com/Stuk/jszip/blob/v2.x/dist/jszip.min.js" data-pjax-transient>


  <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">

  <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">

  <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#000000">
  <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">

<meta name="theme-color" content="#1e2327">


  <meta name="u2f-support" content="true">

  </head>

  <body class="logged-in env-production page-blob">
    


  <div class="position-relative js-header-wrapper ">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div id="js-pjax-loader-bar" class="pjax-loader-bar"><div class="progress"></div></div>

    
    
    



        
<div class="header" role="banner">
  <div class="container clearfix">
    <a class="header-logo-invertocat" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" data-ga-click="Header, go to dashboard, icon:logo">
  <svg aria-hidden="true" class="octicon octicon-mark-github" height="32" version="1.1" viewBox="0 0 16 16" width="32"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
</a>


        <div class="header-search scoped-search site-scoped-search js-site-search" role="search">
  <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/Stuk/jszip/search" class="js-site-search-form" data-scoped-search-url="/Stuk/jszip/search" data-unscoped-search-url="/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <label class="form-control header-search-wrapper js-chromeless-input-container">
        <a href="/Stuk/jszip/blob/v2.x/dist/jszip.min.js" class="header-search-scope no-underline">This repository</a>
      <input type="text"
        class="form-control header-search-input js-site-search-focus js-site-search-field is-clearable"
        data-hotkey="s"
        name="q"
        value=""
        placeholder="Search"
        aria-label="Search this repository"
        data-unscoped-placeholder="Search GitHub"
        data-scoped-placeholder="Search"
        autocapitalize="off">
        <input type="hidden" class="js-site-search-type-field" name="type" >
    </label>
</form></div>


      <ul class="header-nav float-left" role="navigation">
        <li class="header-nav-item">
          <a href="/pulls" aria-label="Pull requests you created" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:pulls context:user" data-hotkey="g p" data-selected-links="/pulls /pulls/assigned /pulls/mentioned /pulls">
            Pull requests
</a>        </li>
        <li class="header-nav-item">
          <a href="/issues" aria-label="Issues you created" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:issues context:user" data-hotkey="g i" data-selected-links="/issues /issues/assigned /issues/mentioned /issues">
            Issues
</a>        </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://gist.github.com/" data-ga-click="Header, go to gist, text:gist">Gist</a>
          </li>
      </ul>

    
<ul class="header-nav user-nav float-right" id="user-links">
  <li class="header-nav-item">
    

  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link tooltipped tooltipped-s js-menu-target" href="/new"
       aria-label="Create new…"
       data-ga-click="Header, create new, icon:add">
      <svg aria-hidden="true" class="octicon octicon-plus float-left" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 9H7v5H5V9H0V7h5V2h2v5h5z"/></svg>
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <ul class="dropdown-menu dropdown-menu-sw">
        
<a class="dropdown-item" href="/new" data-ga-click="Header, create new repository">
  New repository
</a>

  <a class="dropdown-item" href="/new/import" data-ga-click="Header, import a repository">
    Import repository
  </a>

<a class="dropdown-item" href="https://gist.github.com/" data-ga-click="Header, create new gist">
  New gist
</a>

  <a class="dropdown-item" href="/organizations/new" data-ga-click="Header, create new organization">
    New organization
  </a>



  <div class="dropdown-divider"></div>
  <div class="dropdown-header">
    <span title="Stuk/jszip">This repository</span>
  </div>
    <a class="dropdown-item" href="/Stuk/jszip/issues/new" data-ga-click="Header, create new issue">
      New issue
    </a>

      </ul>
    </div>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link name tooltipped tooltipped-sw js-menu-target" href="/enegence"
       aria-label="View profile and more"
       data-ga-click="Header, show menu, icon:avatar">
      <img alt="@enegence" class="avatar" src="https://avatars2.githubusercontent.com/u/21273320?v=3&amp;s=40" height="20" width="20">
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <div class="dropdown-menu dropdown-menu-sw">
        <div class="dropdown-header header-nav-current-user css-truncate">
          Signed in as <strong class="css-truncate-target">enegence</strong>
        </div>

        <div class="dropdown-divider"></div>

        <a class="dropdown-item" href="/enegence" data-ga-click="Header, go to profile, text:your profile">
          Your profile
        </a>
        <a class="dropdown-item" href="/enegence?tab=stars" data-ga-click="Header, go to starred repos, text:your stars">
          Your stars
        </a>
        <a class="dropdown-item" href="/explore" data-ga-click="Header, go to explore, text:explore">
          Explore
        </a>
          <a class="dropdown-item" href="/integrations" data-ga-click="Header, go to integrations, text:integrations">
            Integrations
          </a>
        <a class="dropdown-item" href="https://help.github.com" data-ga-click="Header, go to help, text:help">
          Help
        </a>

        <div class="dropdown-divider"></div>

        <a class="dropdown-item" href="/settings/profile" data-ga-click="Header, go to settings, icon:settings">
          Settings
        </a>

        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/logout" class="logout-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="mFXQeRs64/iuZduLtIa7VqskNAMtrFmFdwxD6oRLUZaTlUALxXeEXfPSi3+j1gw5mKusD7KlnHjbcyJIBUOOYg==" /></div>
          <button type="submit" class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout">
            Sign out
          </button>
</form>      </div>
    </div>
  </li>
</ul>


    <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/logout" class="sr-only right-0" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="YdbEOGh/NgsoS/JNQVYSnny6LdlLGRcQh3grm6xClFNqFlRKtjJRrnX8orlWBqXxTzW11dQQ0u0rB0o5LUpLpw==" /></div>
      <button type="submit" class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout">
        Sign out
      </button>
</form>  </div>
</div>


      

  </div>

  <div id="start-of-content" class="accessibility-aid"></div>

    <div id="js-flash-container">
</div>



  <div role="main">
        <div itemscope itemtype="http://schema.org/SoftwareSourceCode">
    <div id="js-repo-pjax-container" data-pjax-container>
        


  <div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav">
    <div class="container repohead-details-container">


      <ul class="pagehead-actions">
  <li>
        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="yqIEg0bciniTJunB+C767DCAuo0VNf4ISw1xlbOfA6o2iNKKiwG4rHZBBGzdxB+GikzxVGt8EghS6WE7yMG5LQ==" /></div>      <input class="form-control" id="repository_id" name="repository_id" type="hidden" value="292525" />

        <div class="select-menu js-menu-container js-select-menu">
          <a href="/Stuk/jszip/subscription"
            class="btn btn-sm btn-with-count select-menu-button js-menu-target" role="button" tabindex="0" aria-haspopup="true"
            data-ga-click="Repository, click Watch settings, action:blob#show">
            <span class="js-select-button">
              <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
              Watch
            </span>
          </a>
          <a class="social-count js-social-count"
            href="/Stuk/jszip/watchers"
            aria-label="96 users are watching this repository">
            96
          </a>

        <div class="select-menu-modal-holder">
          <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
            <div class="select-menu-header js-navigation-enable" tabindex="-1">
              <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
              <span class="select-menu-title">Notifications</span>
            </div>

              <div class="select-menu-list js-navigation-container" role="menu">

                <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
                  <div class="select-menu-item-text">
                    <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                    <span class="select-menu-item-heading">Not watching</span>
                    <span class="description">Be notified when participating or @mentioned.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
                      Watch
                    </span>
                  </div>
                </div>

                <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
                  <div class="select-menu-item-text">
                    <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                    <span class="select-menu-item-heading">Watching</span>
                    <span class="description">Be notified of all conversations.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
                      Unwatch
                    </span>
                  </div>
                </div>

                <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
                  <div class="select-menu-item-text">
                    <input id="do_ignore" name="do" type="radio" value="ignore" />
                    <span class="select-menu-item-heading">Ignoring</span>
                    <span class="description">Never be notified.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-mute" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8 2.81v10.38c0 .67-.81 1-1.28.53L3 10H1c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h2l3.72-3.72C7.19 1.81 8 2.14 8 2.81zm7.53 3.22l-1.06-1.06-1.97 1.97-1.97-1.97-1.06 1.06L11.44 8 9.47 9.97l1.06 1.06 1.97-1.97 1.97 1.97 1.06-1.06L13.56 8l1.97-1.97z"/></svg>
                      Stop ignoring
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
</form>
  </li>

  <li>
      <div class="js-toggler-container js-social-container starring-container ">
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/Stuk/jszip/unstar" class="starred" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="tK7FJfSVYYd+WfqMOSbvJ3tsBHO9f2WV26+lFK9Ak2t6HQ2okYwHPh41yfKSQLNII9e1ly8xiqJ7peg+Y2JSUA==" /></div>
      <button
        type="submit"
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Unstar this repository" title="Unstar Stuk/jszip"
        data-ga-click="Repository, click unstar button, action:blob#show; text:Unstar">
        <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"/></svg>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/Stuk/jszip/stargazers"
           aria-label="2916 users starred this repository">
          2,916
        </a>
</form>
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/Stuk/jszip/star" class="unstarred" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="vZQTmc8lpQz4yMz0D242To1gmuEXONKghOCqBxcYXhgQ4o9u9/QgJy/YOZ3VOqS8xiBLCd9t5RhlXBVGnKBNCQ==" /></div>
      <button
        type="submit"
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Star this repository" title="Star Stuk/jszip"
        data-ga-click="Repository, click star button, action:blob#show; text:Star">
        <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"/></svg>
        Star
      </button>
        <a class="social-count js-social-count" href="/Stuk/jszip/stargazers"
           aria-label="2916 users starred this repository">
          2,916
        </a>
</form>  </div>

  </li>

  <li>
          <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/Stuk/jszip/fork" class="btn-with-count" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="dCPkhoIxcEDxYy9H9MoZJE0roe2eawZ9bdg0qHpemb+Fl1pgBKmBsKwjGukQJOi0KX5fwr3BbE/k/EwnR9skOw==" /></div>
            <button
                type="submit"
                class="btn btn-sm btn-with-count"
                data-ga-click="Repository, show fork modal, action:blob#show; text:Fork"
                title="Fork your own copy of Stuk/jszip to your account"
                aria-label="Fork your own copy of Stuk/jszip to your account">
              <svg aria-hidden="true" class="octicon octicon-repo-forked" height="16" version="1.1" viewBox="0 0 10 16" width="10"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
              Fork
            </button>
</form>
    <a href="/Stuk/jszip/network" class="social-count"
       aria-label="344 users forked this repository">
      344
    </a>
  </li>
</ul>

      <h1 class="public ">
  <svg aria-hidden="true" class="octicon octicon-repo" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
  <span class="author" itemprop="author"><a href="/Stuk" class="url fn" rel="author">Stuk</a></span><!--
--><span class="path-divider">/</span><!--
--><strong itemprop="name"><a href="/Stuk/jszip" data-pjax="#js-repo-pjax-container">jszip</a></strong>

</h1>

    </div>
    <div class="container">
      
<nav class="reponav js-repo-nav js-sidenav-container-pjax"
     itemscope
     itemtype="http://schema.org/BreadcrumbList"
     role="navigation"
     data-pjax="#js-repo-pjax-container">

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/Stuk/jszip/tree/v2.x" class="js-selected-navigation-item selected reponav-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /Stuk/jszip/tree/v2.x" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-code" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"/></svg>
      <span itemprop="name">Code</span>
      <meta itemprop="position" content="1">
</a>  </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a href="/Stuk/jszip/issues" class="js-selected-navigation-item reponav-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /Stuk/jszip/issues" itemprop="url">
        <svg aria-hidden="true" class="octicon octicon-issue-opened" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"/></svg>
        <span itemprop="name">Issues</span>
        <span class="counter">93</span>
        <meta itemprop="position" content="2">
</a>    </span>

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/Stuk/jszip/pulls" class="js-selected-navigation-item reponav-item" data-hotkey="g p" data-selected-links="repo_pulls /Stuk/jszip/pulls" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-git-pull-request" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
      <span itemprop="name">Pull requests</span>
      <span class="counter">3</span>
      <meta itemprop="position" content="3">
</a>  </span>

    <a href="/Stuk/jszip/projects" class="js-selected-navigation-item reponav-item" data-selected-links="repo_projects new_repo_project repo_project /Stuk/jszip/projects">
      <svg aria-hidden="true" class="octicon octicon-project" height="16" version="1.1" viewBox="0 0 15 16" width="15"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"/></svg>
      Projects
      <span class="counter">0</span>
</a>


  <a href="/Stuk/jszip/pulse" class="js-selected-navigation-item reponav-item" data-selected-links="pulse /Stuk/jszip/pulse">
    <svg aria-hidden="true" class="octicon octicon-pulse" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M11.5 8L8.8 5.4 6.6 8.5 5.5 1.6 2.38 8H0v2h3.6l.9-1.8.9 5.4L9 8.5l1.6 1.5H14V8z"/></svg>
    Pulse
</a>
  <a href="/Stuk/jszip/graphs" class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors /Stuk/jszip/graphs">
    <svg aria-hidden="true" class="octicon octicon-graph" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"/></svg>
    Graphs
</a>

</nav>

    </div>
  </div>

<div class="container new-discussion-timeline experiment-repo-nav">
  <div class="repository-content">

    

<a href="/Stuk/jszip/blob/b06e8cdfe57bf015837bb4e7c6734c2c39e69f9a/dist/jszip.min.js" class="d-none js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:911fa6b9ae19787397aef66a0ef77b62 -->

<div class="file-navigation js-zeroclipboard-container">
  
<div class="select-menu branch-select-menu js-menu-container js-select-menu float-left">
  <button class=" btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    
    type="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
      <i>Branch:</i>
      <span class="js-select-button css-truncate-target">v2.x</span>
  </button>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
        <span class="select-menu-title">Switch branches/tags</span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="form-control js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Stuk/jszip/blob/gh-pages/dist/jszip.min.js"
               data-name="gh-pages"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                gh-pages
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Stuk/jszip/blob/jszip_v3/dist/jszip.min.js"
               data-name="jszip_v3"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                jszip_v3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Stuk/jszip/blob/master/dist/jszip.min.js"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                master
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Stuk/jszip/blob/umd/dist/jszip.min.js"
               data-name="umd"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                umd
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/Stuk/jszip/blob/v2.x/dist/jszip.min.js"
               data-name="v2.x"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                v2.x
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Stuk/jszip/tree/v3.1.3/dist/jszip.min.js"
              data-name="v3.1.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v3.1.3">
                v3.1.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Stuk/jszip/tree/v3.1.2/dist/jszip.min.js"
              data-name="v3.1.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v3.1.2">
                v3.1.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Stuk/jszip/tree/v3.1.1/dist/jszip.min.js"
              data-name="v3.1.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v3.1.1">
                v3.1.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Stuk/jszip/tree/v3.1.0/dist/jszip.min.js"
              data-name="v3.1.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v3.1.0">
                v3.1.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Stuk/jszip/tree/v3.0.0/dist/jszip.min.js"
              data-name="v3.0.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v3.0.0">
                v3.0.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Stuk/jszip/tree/v2.6.1/dist/jszip.min.js"
              data-name="v2.6.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.6.1">
                v2.6.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Stuk/jszip/tree/v2.6.0/dist/jszip.min.js"
              data-name="v2.6.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.6.0">
                v2.6.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Stuk/jszip/tree/v2.5.0/dist/jszip.min.js"
              data-name="v2.5.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.5.0">
                v2.5.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Stuk/jszip/tree/v2.4.0/dist/jszip.min.js"
              data-name="v2.4.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.4.0">
                v2.4.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Stuk/jszip/tree/v2.3.0/dist/jszip.min.js"
              data-name="v2.3.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.3.0">
                v2.3.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Stuk/jszip/tree/v2.2.2/dist/jszip.min.js"
              data-name="v2.2.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.2.2">
                v2.2.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Stuk/jszip/tree/v2.2.1/dist/jszip.min.js"
              data-name="v2.2.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.2.1">
                v2.2.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Stuk/jszip/tree/v2.2.0/dist/jszip.min.js"
              data-name="v2.2.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.2.0">
                v2.2.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Stuk/jszip/tree/v2.1.1/dist/jszip.min.js"
              data-name="v2.1.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.1.1">
                v2.1.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Stuk/jszip/tree/v2.1.0/dist/jszip.min.js"
              data-name="v2.1.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.1.0">
                v2.1.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Stuk/jszip/tree/v2.0.0/dist/jszip.min.js"
              data-name="v2.0.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.0.0">
                v2.0.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Stuk/jszip/tree/v1.0.1/dist/jszip.min.js"
              data-name="v1.0.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.1">
                v1.0.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Stuk/jszip/tree/v1.0.0/dist/jszip.min.js"
              data-name="v1.0.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.0">
                v1.0.0
              </span>
            </a>
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

  <div class="BtnGroup float-right">
    <a href="/Stuk/jszip/find/v2.x"
          class="js-pjax-capture-input btn btn-sm BtnGroup-item"
          data-pjax
          data-hotkey="t">
      Find file
    </a>
    <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm BtnGroup-item tooltipped tooltipped-s" data-copied-hint="Copied!" type="button">Copy path</button>
  </div>
  <div class="breadcrumb js-zeroclipboard-target">
    <span class="repo-root js-repo-root"><span class="js-path-segment"><a href="/Stuk/jszip/tree/v2.x"><span>jszip</span></a></span></span><span class="separator">/</span><span class="js-path-segment"><a href="/Stuk/jszip/tree/v2.x/dist"><span>dist</span></a></span><span class="separator">/</span><strong class="final-path">jszip.min.js</strong>
  </div>
</div>



  <div class="commit-tease">
      <span class="float-right">
        <a class="commit-tease-sha" href="/Stuk/jszip/commit/ed92f91d235196b9797a3a22b7dc333da6709d28" data-pjax>
          ed92f91
        </a>
        <relative-time datetime="2016-07-27T19:23:20Z">Jul 27, 2016</relative-time>
      </span>
      <div>
        <img alt="@dduponchel" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/30335?v=3&amp;s=40" width="20" />
        <a href="/dduponchel" class="user-mention" rel="contributor">dduponchel</a>
          <a href="/Stuk/jszip/commit/ed92f91d235196b9797a3a22b7dc333da6709d28" class="message" data-pjax="true" title="update the generated files">update the generated files</a>
      </div>

    <div class="commit-tease-contributors">
      <button type="button" class="btn-link muted-link contributors-toggle" data-facebox="#blob_contributors_box">
        <strong>1</strong>
         contributor
      </button>
      
    </div>

    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header" data-facebox-id="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list" data-facebox-id="facebox-description">
          <li class="facebox-user-list-item">
            <img alt="@dduponchel" height="24" src="https://avatars2.githubusercontent.com/u/30335?v=3&amp;s=48" width="24" />
            <a href="/dduponchel">dduponchel</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file">
  <div class="file-header">
  <div class="file-actions">

    <div class="BtnGroup">
      <a href="/Stuk/jszip/raw/v2.x/dist/jszip.min.js" class="btn btn-sm BtnGroup-item" id="raw-url">Raw</a>
        <a href="/Stuk/jszip/blame/v2.x/dist/jszip.min.js" class="btn btn-sm js-update-url-with-hash BtnGroup-item" data-hotkey="b">Blame</a>
      <a href="/Stuk/jszip/commits/v2.x/dist/jszip.min.js" class="btn btn-sm BtnGroup-item" rel="nofollow">History</a>
    </div>

        <a class="btn-octicon tooltipped tooltipped-nw"
           href="https://windows.github.com"
           aria-label="Open this file in GitHub Desktop"
           data-ga-click="Repository, open with desktop, type:windows">
            <svg aria-hidden="true" class="octicon octicon-device-desktop" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"/></svg>
        </a>

        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/Stuk/jszip/edit/v2.x/dist/jszip.min.js" class="inline-form js-update-url-with-hash" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="+o9tydjbh51BWGTKLC1ZRPDo0h2VAiiZu4SY48VeT9zppOYslEwpql53CzSc4xIEQ1byHtuvpOkXUI0BbankaA==" /></div>
          <button class="btn-octicon tooltipped tooltipped-nw" type="submit"
            aria-label="Fork this project and edit the file" data-hotkey="e" data-disable-with>
            <svg aria-hidden="true" class="octicon octicon-pencil" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"/></svg>
          </button>
</form>        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/Stuk/jszip/delete/v2.x/dist/jszip.min.js" class="inline-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="s9VrK15VdanmNrIgefclzuHAcpvOgLMFpd5sFcWqldZuccxdOtJyG3dqlZm76Q7xl2XhlOcYizQxfyBdPE4EQg==" /></div>
          <button class="btn-octicon btn-octicon-danger tooltipped tooltipped-nw" type="submit"
            aria-label="Fork this project and delete the file" data-disable-with>
            <svg aria-hidden="true" class="octicon octicon-trashcan" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"/></svg>
          </button>
</form>  </div>

  <div class="file-info">
      14 lines (11 sloc)
      <span class="file-info-divider"></span>
    79.6 KB
  </div>
</div>

  

  <div itemprop="text" class="blob-wrapper data type-javascript">
      <table class="highlight tab-size js-file-line-container" data-tab-size="8">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line">/*!</td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code blob-code-inner js-file-line">JSZip - A Javascript class for generating and reading zip files</td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code blob-code-inner js-file-line">&lt;http://stuartk.com/jszip&gt;</td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code blob-code-inner js-file-line">(c) 2009-2014 Stuart Knightley &lt;stuart [at] stuartk.com&gt;</td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code blob-code-inner js-file-line">Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/master/LICENSE.markdown.</td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code blob-code-inner js-file-line">JSZip uses the library pako released under the MIT license :</td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code blob-code-inner js-file-line">https://github.com/nodeca/pako/blob/master/LICENSE</td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code blob-code-inner js-file-line">*/</td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code blob-code-inner js-file-line">!function(a){if(&quot;object&quot;==typeof exports&amp;&amp;&quot;undefined&quot;!=typeof module)module.exports=a();else if(&quot;function&quot;==typeof define&amp;&amp;define.amd)define([],a);else{var b;b=&quot;undefined&quot;!=typeof window?window:&quot;undefined&quot;!=typeof global?global:&quot;undefined&quot;!=typeof self?self:this,b.JSZip=a()}}(function(){return function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i=&quot;function&quot;==typeof require&amp;&amp;require;if(!h&amp;&amp;i)return i(g,!0);if(f)return f(g,!0);var j=new Error(&quot;Cannot find module &#39;&quot;+g+&quot;&#39;&quot;);throw j.code=&quot;MODULE_NOT_FOUND&quot;,j}var k=c[g]={exports:{}};b[g][0].call(k.exports,function(a){var c=b[g][1][a];return e(c?c:a)},k,k.exports,a,b,c,d)}return c[g].exports}for(var f=&quot;function&quot;==typeof require&amp;&amp;require,g=0;g&lt;d.length;g++)e(d[g]);return e}({1:[function(a,b,c){&quot;use strict&quot;;function d(a){if(a){this.data=a,this.length=this.data.length,this.index=0,this.zero=0;for(var b=0;b&lt;this.data.length;b++)a[b]=255&amp;a[b]}}var e=a(&quot;./dataReader&quot;);d.prototype=new e,d.prototype.byteAt=function(a){return this.data[this.zero+a]},d.prototype.lastIndexOfSignature=function(a){for(var b=a.charCodeAt(0),c=a.charCodeAt(1),d=a.charCodeAt(2),e=a.charCodeAt(3),f=this.length-4;f&gt;=0;--f)if(this.data[f]===b&amp;&amp;this.data[f+1]===c&amp;&amp;this.data[f+2]===d&amp;&amp;this.data[f+3]===e)return f-this.zero;return-1},d.prototype.readData=function(a){if(this.checkOffset(a),0===a)return[];var b=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,b},b.exports=d},{&quot;./dataReader&quot;:6}],2:[function(a,b,c){&quot;use strict&quot;;var d=&quot;ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=&quot;;c.encode=function(a,b){for(var c,e,f,g,h,i,j,k=&quot;&quot;,l=0;l&lt;a.length;)c=a.charCodeAt(l++),e=a.charCodeAt(l++),f=a.charCodeAt(l++),g=c&gt;&gt;2,h=(3&amp;c)&lt;&lt;4|e&gt;&gt;4,i=(15&amp;e)&lt;&lt;2|f&gt;&gt;6,j=63&amp;f,isNaN(e)?i=j=64:isNaN(f)&amp;&amp;(j=64),k=k+d.charAt(g)+d.charAt(h)+d.charAt(i)+d.charAt(j);return k},c.decode=function(a,b){var c,e,f,g,h,i,j,k=&quot;&quot;,l=0;for(a=a.replace(/[^A-Za-z0-9\+\/\=]/g,&quot;&quot;);l&lt;a.length;)g=d.indexOf(a.charAt(l++)),h=d.indexOf(a.charAt(l++)),i=d.indexOf(a.charAt(l++)),j=d.indexOf(a.charAt(l++)),c=g&lt;&lt;2|h&gt;&gt;4,e=(15&amp;h)&lt;&lt;4|i&gt;&gt;2,f=(3&amp;i)&lt;&lt;6|j,k+=String.fromCharCode(c),64!=i&amp;&amp;(k+=String.fromCharCode(e)),64!=j&amp;&amp;(k+=String.fromCharCode(f));return k}},{}],3:[function(a,b,c){&quot;use strict&quot;;function d(){this.compressedSize=0,this.uncompressedSize=0,this.crc32=0,this.compressionMethod=null,this.compressedContent=null}d.prototype={getContent:function(){return null},getCompressedContent:function(){return null}},b.exports=d},{}],4:[function(a,b,c){&quot;use strict&quot;;c.STORE={magic:&quot;\0\0&quot;,compress:function(a,b){return a},uncompress:function(a){return a},compressInputType:null,uncompressInputType:null},c.DEFLATE=a(&quot;./flate&quot;)},{&quot;./flate&quot;:9}],5:[function(a,b,c){&quot;use strict&quot;;var d=a(&quot;./utils&quot;),e=[0,1996959894,3993919788,2567524794,124634137,1886057615,3915621685,2657392035,249268274,2044508324,3772115230,2547177864,162941995,2125561021,3887607047,2428444049,498536548,1789927666,4089016648,2227061214,450548861,1843258603,4107580753,2211677639,325883990,1684777152,4251122042,2321926636,335633487,1661365465,4195302755,2366115317,997073096,1281953886,3579855332,2724688242,1006888145,1258607687,3524101629,2768942443,901097722,1119000684,3686517206,2898065728,853044451,1172266101,3705015759,2882616665,651767980,1373503546,3369554304,3218104598,565507253,1454621731,3485111705,3099436303,671266974,1594198024,3322730930,2970347812,795835527,1483230225,3244367275,3060149565,1994146192,31158534,2563907772,4023717930,1907459465,112637215,2680153253,3904427059,2013776290,251722036,2517215374,3775830040,2137656763,141376813,2439277719,3865271297,1802195444,476864866,2238001368,4066508878,1812370925,453092731,2181625025,4111451223,1706088902,314042704,2344532202,4240017532,1658658271,366619977,2362670323,4224994405,1303535960,984961486,2747007092,3569037538,1256170817,1037604311,2765210733,3554079995,1131014506,879679996,2909243462,3663771856,1141124467,855842277,2852801631,3708648649,1342533948,654459306,3188396048,3373015174,1466479909,544179635,3110523913,3462522015,1591671054,702138776,2966460450,3352799412,1504918807,783551873,3082640443,3233442989,3988292384,2596254646,62317068,1957810842,3939845945,2647816111,81470997,1943803523,3814918930,2489596804,225274430,2053790376,3826175755,2466906013,167816743,2097651377,4027552580,2265490386,503444072,1762050814,4150417245,2154129355,426522225,1852507879,4275313526,2312317920,282753626,1742555852,4189708143,2394877945,397917763,1622183637,3604390888,2714866558,953729732,1340076626,3518719985,2797360999,1068828381,1219638859,3624741850,2936675148,906185462,1090812512,3747672003,2825379669,829329135,1181335161,3412177804,3160834842,628085408,1382605366,3423369109,3138078467,570562233,1426400815,3317316542,2998733608,733239954,1555261956,3268935591,3050360625,752459403,1541320221,2607071920,3965973030,1969922972,40735498,2617837225,3943577151,1913087877,83908371,2512341634,3803740692,2075208622,213261112,2463272603,3855990285,2094854071,198958881,2262029012,4057260610,1759359992,534414190,2176718541,4139329115,1873836001,414664567,2282248934,4279200368,1711684554,285281116,2405801727,4167216745,1634467795,376229701,2685067896,3608007406,1308918612,956543938,2808555105,3495958263,1231636301,1047427035,2932959818,3654703836,1088359270,936918e3,2847714899,3736837829,1202900863,817233897,3183342108,3401237130,1404277552,615818150,3134207493,3453421203,1423857449,601450431,3009837614,3294710456,1567103746,711928724,3020668471,3272380065,1510334235,755167117];b.exports=function(a,b){if(&quot;undefined&quot;==typeof a||!a.length)return 0;var c=&quot;string&quot;!==d.getTypeOf(a);&quot;undefined&quot;==typeof b&amp;&amp;(b=0);var f=0,g=0,h=0;b^=-1;for(var i=0,j=a.length;i&lt;j;i++)h=c?a[i]:a.charCodeAt(i),g=255&amp;(b^h),f=e[g],b=b&gt;&gt;&gt;8^f;return b^-1}},{&quot;./utils&quot;:22}],6:[function(a,b,c){&quot;use strict&quot;;function d(a){this.data=null,this.length=0,this.index=0,this.zero=0}var e=a(&quot;./utils&quot;);d.prototype={checkOffset:function(a){this.checkIndex(this.index+a)},checkIndex:function(a){if(this.length&lt;this.zero+a||a&lt;0)throw new Error(&quot;End of data reached (data length = &quot;+this.length+&quot;, asked index = &quot;+a+&quot;). Corrupted zip ?&quot;)},setIndex:function(a){this.checkIndex(a),this.index=a},skip:function(a){this.setIndex(this.index+a)},byteAt:function(a){},readInt:function(a){var b,c=0;for(this.checkOffset(a),b=this.index+a-1;b&gt;=this.index;b--)c=(c&lt;&lt;8)+this.byteAt(b);return this.index+=a,c},readString:function(a){return e.transformTo(&quot;string&quot;,this.readData(a))},readData:function(a){},lastIndexOfSignature:function(a){},readDate:function(){var a=this.readInt(4);return new Date((a&gt;&gt;25&amp;127)+1980,(a&gt;&gt;21&amp;15)-1,a&gt;&gt;16&amp;31,a&gt;&gt;11&amp;31,a&gt;&gt;5&amp;63,(31&amp;a)&lt;&lt;1)}},b.exports=d},{&quot;./utils&quot;:22}],7:[function(a,b,c){&quot;use strict&quot;;c.base64=!1,c.binary=!1,c.dir=!1,c.createFolders=!1,c.date=null,c.compression=null,c.compressionOptions=null,c.comment=null,c.unixPermissions=null,c.dosPermissions=null},{}],8:[function(a,b,c){&quot;use strict&quot;;var d=a(&quot;./utils&quot;);c.string2binary=function(a){return d.string2binary(a)},c.string2Uint8Array=function(a){return d.transformTo(&quot;uint8array&quot;,a)},c.uint8Array2String=function(a){return d.transformTo(&quot;string&quot;,a)},c.string2Blob=function(a){var b=d.transformTo(&quot;arraybuffer&quot;,a);return d.arrayBuffer2Blob(b)},c.arrayBuffer2Blob=function(a){return d.arrayBuffer2Blob(a)},c.transformTo=function(a,b){return d.transformTo(a,b)},c.getTypeOf=function(a){return d.getTypeOf(a)},c.checkSupport=function(a){return d.checkSupport(a)},c.MAX_VALUE_16BITS=d.MAX_VALUE_16BITS,c.MAX_VALUE_32BITS=d.MAX_VALUE_32BITS,c.pretty=function(a){return d.pretty(a)},c.findCompression=function(a){return d.findCompression(a)},c.isRegExp=function(a){return d.isRegExp(a)}},{&quot;./utils&quot;:22}],9:[function(a,b,c){&quot;use strict&quot;;var d=&quot;undefined&quot;!=typeof Uint8Array&amp;&amp;&quot;undefined&quot;!=typeof Uint16Array&amp;&amp;&quot;undefined&quot;!=typeof Uint32Array,e=a(&quot;pako&quot;);c.uncompressInputType=d?&quot;uint8array&quot;:&quot;array&quot;,c.compressInputType=d?&quot;uint8array&quot;:&quot;array&quot;,c.magic=&quot;\b\0&quot;,c.compress=function(a,b){return e.deflateRaw(a,{level:b.level||-1})},c.uncompress=function(a){return e.inflateRaw(a)}},{pako:25}],10:[function(a,b,c){&quot;use strict&quot;;function d(a,b){return this instanceof d?(this.files={},this.comment=null,this.root=&quot;&quot;,a&amp;&amp;this.load(a,b),void(this.clone=function(){var a=new d;for(var b in this)&quot;function&quot;!=typeof this[b]&amp;&amp;(a[b]=this[b]);return a})):new d(a,b)}var e=a(&quot;./base64&quot;);d.prototype=a(&quot;./object&quot;),d.prototype.load=a(&quot;./load&quot;),d.support=a(&quot;./support&quot;),d.defaults=a(&quot;./defaults&quot;),d.utils=a(&quot;./deprecatedPublicUtils&quot;),d.base64={encode:function(a){return e.encode(a)},decode:function(a){return e.decode(a)}},d.compressions=a(&quot;./compressions&quot;),b.exports=d},{&quot;./base64&quot;:2,&quot;./compressions&quot;:4,&quot;./defaults&quot;:7,&quot;./deprecatedPublicUtils&quot;:8,&quot;./load&quot;:11,&quot;./object&quot;:14,&quot;./support&quot;:18}],11:[function(a,b,c){&quot;use strict&quot;;var d=a(&quot;./base64&quot;),e=a(&quot;./utf8&quot;),f=a(&quot;./utils&quot;),g=a(&quot;./zipEntries&quot;);b.exports=function(a,b){var c,h,i,j;for(b=f.extend(b||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:e.utf8decode}),b.base64&amp;&amp;(a=d.decode(a)),h=new g(a,b),c=h.files,i=0;i&lt;c.length;i++)j=c[i],this.file(j.fileNameStr,j.decompressed,{binary:!0,optimizedBinaryString:!0,date:j.date,dir:j.dir,comment:j.fileCommentStr.length?j.fileCommentStr:null,unixPermissions:j.unixPermissions,dosPermissions:j.dosPermissions,createFolders:b.createFolders});return h.zipComment.length&amp;&amp;(this.comment=h.zipComment),this}},{&quot;./base64&quot;:2,&quot;./utf8&quot;:21,&quot;./utils&quot;:22,&quot;./zipEntries&quot;:23}],12:[function(a,b,c){(function(a){&quot;use strict&quot;;b.exports=function(b,c){return new a(b,c)},b.exports.test=function(b){return a.isBuffer(b)}}).call(this,&quot;undefined&quot;!=typeof Buffer?Buffer:void 0)},{}],13:[function(a,b,c){&quot;use strict&quot;;function d(a){this.data=a,this.length=this.data.length,this.index=0,this.zero=0}var e=a(&quot;./uint8ArrayReader&quot;);d.prototype=new e,d.prototype.readData=function(a){this.checkOffset(a);var b=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,b},b.exports=d},{&quot;./uint8ArrayReader&quot;:19}],14:[function(a,b,c){&quot;use strict&quot;;var d=a(&quot;./support&quot;),e=a(&quot;./utils&quot;),f=a(&quot;./crc32&quot;),g=a(&quot;./signature&quot;),h=a(&quot;./defaults&quot;),i=a(&quot;./base64&quot;),j=a(&quot;./compressions&quot;),k=a(&quot;./compressedObject&quot;),l=a(&quot;./nodeBuffer&quot;),m=a(&quot;./utf8&quot;),n=a(&quot;./stringWriter&quot;),o=a(&quot;./uint8ArrayWriter&quot;),p=function(a){if(a._data instanceof k&amp;&amp;(a._data=a._data.getContent(),a.options.binary=!0,a.options.base64=!1,&quot;uint8array&quot;===e.getTypeOf(a._data))){var b=a._data;a._data=new Uint8Array(b.length),0!==b.length&amp;&amp;a._data.set(b,0)}return a._data},q=function(a){var b=p(a),c=e.getTypeOf(b);return&quot;string&quot;===c?!a.options.binary&amp;&amp;d.nodebuffer?l(b,&quot;utf-8&quot;):a.asBinary():b},r=function(a){var b=p(this);return null===b||&quot;undefined&quot;==typeof b?&quot;&quot;:(this.options.base64&amp;&amp;(b=i.decode(b)),b=a&amp;&amp;this.options.binary?D.utf8decode(b):e.transformTo(&quot;string&quot;,b),a||this.options.binary||(b=e.transformTo(&quot;string&quot;,D.utf8encode(b))),b)},s=function(a,b,c){this.name=a,this.dir=c.dir,this.date=c.date,this.comment=c.comment,this.unixPermissions=c.unixPermissions,this.dosPermissions=c.dosPermissions,this._data=b,this.options=c,this._initialMetadata={dir:c.dir,date:c.date}};s.prototype={asText:function(){return r.call(this,!0)},asBinary:function(){return r.call(this,!1)},asNodeBuffer:function(){var a=q(this);return e.transformTo(&quot;nodebuffer&quot;,a)},asUint8Array:function(){var a=q(this);return e.transformTo(&quot;uint8array&quot;,a)},asArrayBuffer:function(){return this.asUint8Array().buffer}};var t=function(a,b){var c,d=&quot;&quot;;for(c=0;c&lt;b;c++)d+=String.fromCharCode(255&amp;a),a&gt;&gt;&gt;=8;return d},u=function(a){return a=a||{},a.base64!==!0||null!==a.binary&amp;&amp;void 0!==a.binary||(a.binary=!0),a=e.extend(a,h),a.date=a.date||new Date,null!==a.compression&amp;&amp;(a.compression=a.compression.toUpperCase()),a},v=function(a,b,c){var d,f=e.getTypeOf(b);if(c=u(c),&quot;string&quot;==typeof c.unixPermissions&amp;&amp;(c.unixPermissions=parseInt(c.unixPermissions,8)),c.unixPermissions&amp;&amp;16384&amp;c.unixPermissions&amp;&amp;(c.dir=!0),c.dosPermissions&amp;&amp;16&amp;c.dosPermissions&amp;&amp;(c.dir=!0),c.dir&amp;&amp;(a=x(a)),c.createFolders&amp;&amp;(d=w(a))&amp;&amp;y.call(this,d,!0),c.dir||null===b||&quot;undefined&quot;==typeof b)c.base64=!1,c.binary=!1,b=null,f=null;else if(&quot;string&quot;===f)c.binary&amp;&amp;!c.base64&amp;&amp;c.optimizedBinaryString!==!0&amp;&amp;(b=e.string2binary(b));else{if(c.base64=!1,c.binary=!0,!(f||b instanceof k))throw new Error(&quot;The data of &#39;&quot;+a+&quot;&#39; is in an unsupported format !&quot;);&quot;arraybuffer&quot;===f&amp;&amp;(b=e.transformTo(&quot;uint8array&quot;,b))}var g=new s(a,b,c);return this.files[a]=g,g},w=function(a){&quot;/&quot;==a.slice(-1)&amp;&amp;(a=a.substring(0,a.length-1));var b=a.lastIndexOf(&quot;/&quot;);return b&gt;0?a.substring(0,b):&quot;&quot;},x=function(a){return&quot;/&quot;!=a.slice(-1)&amp;&amp;(a+=&quot;/&quot;),a},y=function(a,b){return b=&quot;undefined&quot;!=typeof b&amp;&amp;b,a=x(a),this.files[a]||v.call(this,a,null,{dir:!0,createFolders:b}),this.files[a]},z=function(a,b,c){var d,g=new k;return a._data instanceof k?(g.uncompressedSize=a._data.uncompressedSize,g.crc32=a._data.crc32,0===g.uncompressedSize||a.dir?(b=j.STORE,g.compressedContent=&quot;&quot;,g.crc32=0):a._data.compressionMethod===b.magic?g.compressedContent=a._data.getCompressedContent():(d=a._data.getContent(),g.compressedContent=b.compress(e.transformTo(b.compressInputType,d),c))):(d=q(a),d&amp;&amp;0!==d.length&amp;&amp;!a.dir||(b=j.STORE,d=&quot;&quot;),g.uncompressedSize=d.length,g.crc32=f(d),g.compressedContent=b.compress(e.transformTo(b.compressInputType,d),c)),g.compressedSize=g.compressedContent.length,g.compressionMethod=b.magic,g},A=function(a,b){var c=a;return a||(c=b?16893:33204),(65535&amp;c)&lt;&lt;16},B=function(a,b){return 63&amp;(a||0)},C=function(a,b,c,d,h,i){var j,k,l,n,o=(c.compressedContent,i!==m.utf8encode),p=e.transformTo(&quot;string&quot;,i(b.name)),q=e.transformTo(&quot;string&quot;,m.utf8encode(b.name)),r=b.comment||&quot;&quot;,s=e.transformTo(&quot;string&quot;,i(r)),u=e.transformTo(&quot;string&quot;,m.utf8encode(r)),v=q.length!==b.name.length,w=u.length!==r.length,x=b.options,y=&quot;&quot;,z=&quot;&quot;,C=&quot;&quot;;l=b._initialMetadata.dir!==b.dir?b.dir:x.dir,n=b._initialMetadata.date!==b.date?b.date:x.date;var D=0,E=0;l&amp;&amp;(D|=16),&quot;UNIX&quot;===h?(E=798,D|=A(b.unixPermissions,l)):(E=20,D|=B(b.dosPermissions,l)),j=n.getHours(),j&lt;&lt;=6,j|=n.getMinutes(),j&lt;&lt;=5,j|=n.getSeconds()/2,k=n.getFullYear()-1980,k&lt;&lt;=4,k|=n.getMonth()+1,k&lt;&lt;=5,k|=n.getDate(),v&amp;&amp;(z=t(1,1)+t(f(p),4)+q,y+=&quot;up&quot;+t(z.length,2)+z),w&amp;&amp;(C=t(1,1)+t(this.crc32(s),4)+u,y+=&quot;uc&quot;+t(C.length,2)+C);var F=&quot;&quot;;F+=&quot;\n\0&quot;,F+=o||!v&amp;&amp;!w?&quot;\0\0&quot;:&quot;\0\b&quot;,F+=c.compressionMethod,F+=t(j,2),F+=t(k,2),F+=t(c.crc32,4),F+=t(c.compressedSize,4),F+=t(c.uncompressedSize,4),F+=t(p.length,2),F+=t(y.length,2);var G=g.LOCAL_FILE_HEADER+F+p+y,H=g.CENTRAL_FILE_HEADER+t(E,2)+F+t(s.length,2)+&quot;\0\0\0\0&quot;+t(D,4)+t(d,4)+p+y+s;return{fileRecord:G,dirRecord:H,compressedObject:c}},D={load:function(a,b){throw new Error(&quot;Load method is not defined. Is the file jszip-load.js included ?&quot;)},filter:function(a){var b,c,d,f,g=[];for(b in this.files)this.files.hasOwnProperty(b)&amp;&amp;(d=this.files[b],f=new s(d.name,d._data,e.extend(d.options)),c=b.slice(this.root.length,b.length),b.slice(0,this.root.length)===this.root&amp;&amp;a(c,f)&amp;&amp;g.push(f));return g},file:function(a,b,c){if(1===arguments.length){if(e.isRegExp(a)){var d=a;return this.filter(function(a,b){return!b.dir&amp;&amp;d.test(a)})}return this.filter(function(b,c){return!c.dir&amp;&amp;b===a})[0]||null}return a=this.root+a,v.call(this,a,b,c),this},folder:function(a){if(!a)return this;if(e.isRegExp(a))return this.filter(function(b,c){return c.dir&amp;&amp;a.test(b)});var b=this.root+a,c=y.call(this,b),d=this.clone();return d.root=c.name,d},remove:function(a){a=this.root+a;var b=this.files[a];if(b||(&quot;/&quot;!=a.slice(-1)&amp;&amp;(a+=&quot;/&quot;),b=this.files[a]),b&amp;&amp;!b.dir)delete this.files[a];else for(var c=this.filter(function(b,c){return c.name.slice(0,a.length)===a}),d=0;d&lt;c.length;d++)delete this.files[c[d].name];return this},generate:function(a){a=e.extend(a||{},{base64:!0,compression:&quot;STORE&quot;,compressionOptions:null,type:&quot;base64&quot;,platform:&quot;DOS&quot;,comment:null,mimeType:&quot;application/zip&quot;,encodeFileName:m.utf8encode}),e.checkSupport(a.type),&quot;darwin&quot;!==a.platform&amp;&amp;&quot;freebsd&quot;!==a.platform&amp;&amp;&quot;linux&quot;!==a.platform&amp;&amp;&quot;sunos&quot;!==a.platform||(a.platform=&quot;UNIX&quot;),&quot;win32&quot;===a.platform&amp;&amp;(a.platform=&quot;DOS&quot;);var b,c,d=[],f=0,h=0,k=e.transformTo(&quot;string&quot;,a.encodeFileName(a.comment||this.comment||&quot;&quot;));for(var l in this.files)if(this.files.hasOwnProperty(l)){var p=this.files[l],q=p.options.compression||a.compression.toUpperCase(),r=j[q];if(!r)throw new Error(q+&quot; is not a valid compression method !&quot;);var s=p.options.compressionOptions||a.compressionOptions||{},u=z.call(this,p,r,s),v=C.call(this,l,p,u,f,a.platform,a.encodeFileName);f+=v.fileRecord.length+u.compressedSize,h+=v.dirRecord.length,d.push(v)}var w=&quot;&quot;;w=g.CENTRAL_DIRECTORY_END+&quot;\0\0\0\0&quot;+t(d.length,2)+t(d.length,2)+t(h,4)+t(f,4)+t(k.length,2)+k;var x=a.type.toLowerCase();for(b=&quot;uint8array&quot;===x||&quot;arraybuffer&quot;===x||&quot;blob&quot;===x||&quot;nodebuffer&quot;===x?new o(f+h+w.length):new n(f+h+w.length),c=0;c&lt;d.length;c++)b.append(d[c].fileRecord),b.append(d[c].compressedObject.compressedContent);for(c=0;c&lt;d.length;c++)b.append(d[c].dirRecord);b.append(w);var y=b.finalize();switch(a.type.toLowerCase()){case&quot;uint8array&quot;:case&quot;arraybuffer&quot;:case&quot;nodebuffer&quot;:return e.transformTo(a.type.toLowerCase(),y);case&quot;blob&quot;:return e.arrayBuffer2Blob(e.transformTo(&quot;arraybuffer&quot;,y),a.mimeType);case&quot;base64&quot;:return a.base64?i.encode(y):y;default:return y}},crc32:function(a,b){return f(a,b)},utf8encode:function(a){return e.transformTo(&quot;string&quot;,m.utf8encode(a))},utf8decode:function(a){return m.utf8decode(a)}};b.exports=D},{&quot;./base64&quot;:2,&quot;./compressedObject&quot;:3,&quot;./compressions&quot;:4,&quot;./crc32&quot;:5,&quot;./defaults&quot;:7,&quot;./nodeBuffer&quot;:12,&quot;./signature&quot;:15,&quot;./stringWriter&quot;:17,&quot;./support&quot;:18,&quot;./uint8ArrayWriter&quot;:20,&quot;./utf8&quot;:21,&quot;./utils&quot;:22}],15:[function(a,b,c){&quot;use strict&quot;;c.LOCAL_FILE_HEADER=&quot;PK&quot;,c.CENTRAL_FILE_HEADER=&quot;PK&quot;,c.CENTRAL_DIRECTORY_END=&quot;PK&quot;,c.ZIP64_CENTRAL_DIRECTORY_LOCATOR=&quot;PK&quot;,c.ZIP64_CENTRAL_DIRECTORY_END=&quot;PK&quot;,c.DATA_DESCRIPTOR=&quot;PK\b&quot;},{}],16:[function(a,b,c){&quot;use strict&quot;;function d(a,b){this.data=a,b||(this.data=f.string2binary(this.data)),this.length=this.data.length,this.index=0,this.zero=0}var e=a(&quot;./dataReader&quot;),f=a(&quot;./utils&quot;);d.prototype=new e,d.prototype.byteAt=function(a){return this.data.charCodeAt(this.zero+a)},d.prototype.lastIndexOfSignature=function(a){return this.data.lastIndexOf(a)-this.zero},d.prototype.readData=function(a){this.checkOffset(a);var b=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,b},b.exports=d},{&quot;./dataReader&quot;:6,&quot;./utils&quot;:22}],17:[function(a,b,c){&quot;use strict&quot;;var d=a(&quot;./utils&quot;),e=function(){this.data=[]};e.prototype={append:function(a){a=d.transformTo(&quot;string&quot;,a),this.data.push(a)},finalize:function(){return this.data.join(&quot;&quot;)}},b.exports=e},{&quot;./utils&quot;:22}],18:[function(a,b,c){(function(a){&quot;use strict&quot;;if(c.base64=!0,c.array=!0,c.string=!0,c.arraybuffer=&quot;undefined&quot;!=typeof ArrayBuffer&amp;&amp;&quot;undefined&quot;!=typeof Uint8Array,c.nodebuffer=&quot;undefined&quot;!=typeof a,c.uint8array=&quot;undefined&quot;!=typeof Uint8Array,&quot;undefined&quot;==typeof ArrayBuffer)c.blob=!1;else{var b=new ArrayBuffer(0);try{c.blob=0===new Blob([b],{type:&quot;application/zip&quot;}).size}catch(d){try{var e=window.BlobBuilder||window.WebKitBlobBuilder||window.MozBlobBuilder||window.MSBlobBuilder,f=new e;f.append(b),c.blob=0===f.getBlob(&quot;application/zip&quot;).size}catch(d){c.blob=!1}}}}).call(this,&quot;undefined&quot;!=typeof Buffer?Buffer:void 0)},{}],19:[function(a,b,c){&quot;use strict&quot;;function d(a){a&amp;&amp;(this.data=a,this.length=this.data.length,this.index=0,this.zero=0)}var e=a(&quot;./arrayReader&quot;);d.prototype=new e,d.prototype.readData=function(a){if(this.checkOffset(a),0===a)return new Uint8Array(0);var b=this.data.subarray(this.zero+this.index,this.zero+this.index+a);return this.index+=a,b},b.exports=d},{&quot;./arrayReader&quot;:1}],20:[function(a,b,c){&quot;use strict&quot;;var d=a(&quot;./utils&quot;),e=function(a){this.data=new Uint8Array(a),this.index=0};e.prototype={append:function(a){0!==a.length&amp;&amp;(a=d.transformTo(&quot;uint8array&quot;,a),this.data.set(a,this.index),this.index+=a.length)},finalize:function(){return this.data}},b.exports=e},{&quot;./utils&quot;:22}],21:[function(a,b,c){&quot;use strict&quot;;for(var d=a(&quot;./utils&quot;),e=a(&quot;./support&quot;),f=a(&quot;./nodeBuffer&quot;),g=new Array(256),h=0;h&lt;256;h++)g[h]=h&gt;=252?6:h&gt;=248?5:h&gt;=240?4:h&gt;=224?3:h&gt;=192?2:1;g[254]=g[254]=1;var i=function(a){var b,c,d,f,g,h=a.length,i=0;for(f=0;f&lt;h;f++)c=a.charCodeAt(f),55296===(64512&amp;c)&amp;&amp;f+1&lt;h&amp;&amp;(d=a.charCodeAt(f+1),56320===(64512&amp;d)&amp;&amp;(c=65536+(c-55296&lt;&lt;10)+(d-56320),f++)),i+=c&lt;128?1:c&lt;2048?2:c&lt;65536?3:4;for(b=e.uint8array?new Uint8Array(i):new Array(i),g=0,f=0;g&lt;i;f++)c=a.charCodeAt(f),55296===(64512&amp;c)&amp;&amp;f+1&lt;h&amp;&amp;(d=a.charCodeAt(f+1),56320===(64512&amp;d)&amp;&amp;(c=65536+(c-55296&lt;&lt;10)+(d-56320),f++)),c&lt;128?b[g++]=c:c&lt;2048?(b[g++]=192|c&gt;&gt;&gt;6,b[g++]=128|63&amp;c):c&lt;65536?(b[g++]=224|c&gt;&gt;&gt;12,b[g++]=128|c&gt;&gt;&gt;6&amp;63,b[g++]=128|63&amp;c):(b[g++]=240|c&gt;&gt;&gt;18,b[g++]=128|c&gt;&gt;&gt;12&amp;63,b[g++]=128|c&gt;&gt;&gt;6&amp;63,b[g++]=128|63&amp;c);return b},j=function(a,b){var c;for(b=b||a.length,b&gt;a.length&amp;&amp;(b=a.length),c=b-1;c&gt;=0&amp;&amp;128===(192&amp;a[c]);)c--;return c&lt;0?b:0===c?b:c+g[a[c]]&gt;b?c:b},k=function(a){var b,c,e,f,h=a.length,i=new Array(2*h);for(c=0,b=0;b&lt;h;)if(e=a[b++],e&lt;128)i[c++]=e;else if(f=g[e],f&gt;4)i[c++]=65533,b+=f-1;else{for(e&amp;=2===f?31:3===f?15:7;f&gt;1&amp;&amp;b&lt;h;)e=e&lt;&lt;6|63&amp;a[b++],f--;f&gt;1?i[c++]=65533:e&lt;65536?i[c++]=e:(e-=65536,i[c++]=55296|e&gt;&gt;10&amp;1023,i[c++]=56320|1023&amp;e)}return i.length!==c&amp;&amp;(i.subarray?i=i.subarray(0,c):i.length=c),d.applyFromCharCode(i)};c.utf8encode=function(a){return e.nodebuffer?f(a,&quot;utf-8&quot;):i(a)},c.utf8decode=function(a){if(e.nodebuffer)return d.transformTo(&quot;nodebuffer&quot;,a).toString(&quot;utf-8&quot;);a=d.transformTo(e.uint8array?&quot;uint8array&quot;:&quot;array&quot;,a);for(var b=[],c=0,f=a.length,g=65536;c&lt;f;){var h=j(a,Math.min(c+g,f));e.uint8array?b.push(k(a.subarray(c,h))):b.push(k(a.slice(c,h))),c=h}return b.join(&quot;&quot;)}},{&quot;./nodeBuffer&quot;:12,&quot;./support&quot;:18,&quot;./utils&quot;:22}],22:[function(a,b,c){&quot;use strict&quot;;function d(a){return a}function e(a,b){for(var c=0;c&lt;a.length;++c)b[c]=255&amp;a.charCodeAt(c);return b}function f(a){var b=65536,d=[],e=a.length,f=c.getTypeOf(a),g=0,h=!0;try{switch(f){case&quot;uint8array&quot;:String.fromCharCode.apply(null,new Uint8Array(0));break;case&quot;nodebuffer&quot;:String.fromCharCode.apply(null,j(0))}}catch(i){h=!1}if(!h){for(var k=&quot;&quot;,l=0;l&lt;a.length;l++)k+=String.fromCharCode(a[l]);return k}for(;g&lt;e&amp;&amp;b&gt;1;)try{&quot;array&quot;===f||&quot;nodebuffer&quot;===f?d.push(String.fromCharCode.apply(null,a.slice(g,Math.min(g+b,e)))):d.push(String.fromCharCode.apply(null,a.subarray(g,Math.min(g+b,e)))),g+=b}catch(i){b=Math.floor(b/2)}return d.join(&quot;&quot;)}function g(a,b){for(var c=0;c&lt;a.length;c++)b[c]=a[c];return b}var h=a(&quot;./support&quot;),i=a(&quot;./compressions&quot;),j=a(&quot;./nodeBuffer&quot;);c.string2binary=function(a){for(var b=&quot;&quot;,c=0;c&lt;a.length;c++)b+=String.fromCharCode(255&amp;a.charCodeAt(c));return b},c.arrayBuffer2Blob=function(a,b){c.checkSupport(&quot;blob&quot;),b=b||&quot;application/zip&quot;;try{return new Blob([a],{type:b})}catch(d){try{var e=window.BlobBuilder||window.WebKitBlobBuilder||window.MozBlobBuilder||window.MSBlobBuilder,f=new e;return f.append(a),f.getBlob(b)}catch(d){throw new Error(&quot;Bug : can&#39;t construct the Blob.&quot;)}}},c.applyFromCharCode=f;var k={};k.string={string:d,array:function(a){return e(a,new Array(a.length))},arraybuffer:function(a){return k.string.uint8array(a).buffer},uint8array:function(a){return e(a,new Uint8Array(a.length))},nodebuffer:function(a){return e(a,j(a.length))}},k.array={string:f,array:d,arraybuffer:function(a){return new Uint8Array(a).buffer},uint8array:function(a){return new Uint8Array(a)},nodebuffer:function(a){return j(a)}},k.arraybuffer={string:function(a){return f(new Uint8Array(a))},array:function(a){return g(new Uint8Array(a),new Array(a.byteLength))},arraybuffer:d,uint8array:function(a){return new Uint8Array(a)},nodebuffer:function(a){return j(new Uint8Array(a))}},k.uint8array={string:f,array:function(a){return g(a,new Array(a.length))},arraybuffer:function(a){return a.buffer},uint8array:d,nodebuffer:function(a){return j(a)}},k.nodebuffer={string:f,array:function(a){return g(a,new Array(a.length))},arraybuffer:function(a){return k.nodebuffer.uint8array(a).buffer},uint8array:function(a){return g(a,new Uint8Array(a.length))},nodebuffer:d},c.transformTo=function(a,b){if(b||(b=&quot;&quot;),!a)return b;c.checkSupport(a);var d=c.getTypeOf(b),e=k[d][a](b);return e},c.getTypeOf=function(a){return&quot;string&quot;==typeof a?&quot;string&quot;:&quot;[object Array]&quot;===Object.prototype.toString.call(a)?&quot;array&quot;:h.nodebuffer&amp;&amp;j.test(a)?&quot;nodebuffer&quot;:h.uint8array&amp;&amp;a instanceof Uint8Array?&quot;uint8array&quot;:h.arraybuffer&amp;&amp;a instanceof ArrayBuffer?&quot;arraybuffer&quot;:void 0},c.checkSupport=function(a){var b=h[a.toLowerCase()];if(!b)throw new Error(a+&quot; is not supported by this browser&quot;)},c.MAX_VALUE_16BITS=65535,c.MAX_VALUE_32BITS=-1,c.pretty=function(a){var b,c,d=&quot;&quot;;for(c=0;c&lt;(a||&quot;&quot;).length;c++)b=a.charCodeAt(c),d+=&quot;\\x&quot;+(b&lt;16?&quot;0&quot;:&quot;&quot;)+b.toString(16).toUpperCase();return d},c.findCompression=function(a){for(var b in i)if(i.hasOwnProperty(b)&amp;&amp;i[b].magic===a)return i[b];return null},c.isRegExp=function(a){return&quot;[object RegExp]&quot;===Object.prototype.toString.call(a)},c.extend=function(){var a,b,c={};for(a=0;a&lt;arguments.length;a++)for(b in arguments[a])arguments[a].hasOwnProperty(b)&amp;&amp;&quot;undefined&quot;==typeof c[b]&amp;&amp;(c[b]=arguments[a][b]);return c}},{&quot;./compressions&quot;:4,&quot;./nodeBuffer&quot;:12,&quot;./support&quot;:18}],23:[function(a,b,c){&quot;use strict&quot;;function d(a,b){this.files=[],this.loadOptions=b,a&amp;&amp;this.load(a)}var e=a(&quot;./stringReader&quot;),f=a(&quot;./nodeBufferReader&quot;),g=a(&quot;./uint8ArrayReader&quot;),h=a(&quot;./arrayReader&quot;),i=a(&quot;./utils&quot;),j=a(&quot;./signature&quot;),k=a(&quot;./zipEntry&quot;),l=a(&quot;./support&quot;);a(&quot;./object&quot;);d.prototype={checkSignature:function(a){var b=this.reader.readString(4);if(b!==a)throw new Error(&quot;Corrupted zip or bug : unexpected signature (&quot;+i.pretty(b)+&quot;, expected &quot;+i.pretty(a)+&quot;)&quot;)},isSignature:function(a,b){var c=this.reader.index;this.reader.setIndex(a);var d=this.reader.readString(4),e=d===b;return this.reader.setIndex(c),e},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var a=this.reader.readData(this.zipCommentLength),b=l.uint8array?&quot;uint8array&quot;:&quot;array&quot;,c=i.transformTo(b,a);this.zipComment=this.loadOptions.decodeFileName(c)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.versionMadeBy=this.reader.readString(2),this.versionNeeded=this.reader.readInt(2),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var a,b,c,d=this.zip64EndOfCentralSize-44,e=0;e&lt;d;)a=this.reader.readInt(2),b=this.reader.readInt(4),c=this.reader.readString(b),this.zip64ExtensibleData[a]={id:a,length:b,value:c}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),this.disksCount&gt;1)throw new Error(&quot;Multi-volumes zip are not supported&quot;)},readLocalFiles:function(){var a,b;for(a=0;a&lt;this.files.length;a++)b=this.files[a],this.reader.setIndex(b.localHeaderOffset),this.checkSignature(j.LOCAL_FILE_HEADER),b.readLocalPart(this.reader),b.handleUTF8(),b.processAttributes()},readCentralDir:function(){var a;for(this.reader.setIndex(this.centralDirOffset);this.reader.readString(4)===j.CENTRAL_FILE_HEADER;)a=new k({zip64:this.zip64},this.loadOptions),a.readCentralPart(this.reader),this.files.push(a);if(this.centralDirRecords!==this.files.length&amp;&amp;0!==this.centralDirRecords&amp;&amp;0===this.files.length)throw new Error(&quot;Corrupted zip or bug: expected &quot;+this.centralDirRecords+&quot; records in central dir, got &quot;+this.files.length)},readEndOfCentral:function(){var a=this.reader.lastIndexOfSignature(j.CENTRAL_DIRECTORY_END);if(a&lt;0){var b=!this.isSignature(0,j.LOCAL_FILE_HEADER);throw b?new Error(&quot;Can&#39;t find end of central directory : is this a zip file ? If it is, see http://stuk.github.io/jszip/documentation/howto/read_zip.html&quot;):new Error(&quot;Corrupted zip : can&#39;t find end of central directory&quot;)}this.reader.setIndex(a);var c=a;if(this.checkSignature(j.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===i.MAX_VALUE_16BITS||this.diskWithCentralDirStart===i.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===i.MAX_VALUE_16BITS||this.centralDirRecords===i.MAX_VALUE_16BITS||this.centralDirSize===i.MAX_VALUE_32BITS||this.centralDirOffset===i.MAX_VALUE_32BITS){if(this.zip64=!0,a=this.reader.lastIndexOfSignature(j.ZIP64_CENTRAL_DIRECTORY_LOCATOR),a&lt;0)throw new Error(&quot;Corrupted zip : can&#39;t find the ZIP64 end of central directory locator&quot;);if(this.reader.setIndex(a),this.checkSignature(j.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,j.ZIP64_CENTRAL_DIRECTORY_END)&amp;&amp;(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(j.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir&lt;0))throw new Error(&quot;Corrupted zip : can&#39;t find the ZIP64 end of central directory&quot;);this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(j.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var d=this.centralDirOffset+this.centralDirSize;this.zip64&amp;&amp;(d+=20,d+=12+this.zip64EndOfCentralSize);var e=c-d;if(e&gt;0)this.isSignature(c,j.CENTRAL_FILE_HEADER)||(this.reader.zero=e);else if(e&lt;0)throw new Error(&quot;Corrupted zip: missing &quot;+Math.abs(e)+&quot; bytes.&quot;)},prepareReader:function(a){var b=i.getTypeOf(a);if(i.checkSupport(b),&quot;string&quot;!==b||l.uint8array)if(&quot;nodebuffer&quot;===b)this.reader=new f(a);else if(l.uint8array)this.reader=new g(i.transformTo(&quot;uint8array&quot;,a));else{if(!l.array)throw new Error(&quot;Unexpected error: unsupported type &#39;&quot;+b+&quot;&#39;&quot;);this.reader=new h(i.transformTo(&quot;array&quot;,a))}else this.reader=new e(a,this.loadOptions.optimizedBinaryString)},load:function(a){this.prepareReader(a),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},b.exports=d},{&quot;./arrayReader&quot;:1,&quot;./nodeBufferReader&quot;:13,&quot;./object&quot;:14,&quot;./signature&quot;:15,&quot;./stringReader&quot;:16,&quot;./support&quot;:18,&quot;./uint8ArrayReader&quot;:19,&quot;./utils&quot;:22,&quot;./zipEntry&quot;:24}],24:[function(a,b,c){&quot;use strict&quot;;function d(a,b){this.options=a,this.loadOptions=b}var e=a(&quot;./stringReader&quot;),f=a(&quot;./utils&quot;),g=a(&quot;./compressedObject&quot;),h=a(&quot;./object&quot;),i=a(&quot;./support&quot;),j=0,k=3;d.prototype={isEncrypted:function(){return 1===(1&amp;this.bitFlag)},useUTF8:function(){return 2048===(2048&amp;this.bitFlag)},prepareCompressedContent:function(a,b,c){return function(){var d=a.index;a.setIndex(b);var e=a.readData(c);return a.setIndex(d),e}},prepareContent:function(a,b,c,d,e){return function(){var a=f.transformTo(d.uncompressInputType,this.getCompressedContent()),b=d.uncompress(a);if(b.length!==e)throw new Error(&quot;Bug : uncompressed data size mismatch&quot;);return b}},readLocalPart:function(a){var b,c;if(a.skip(22),this.fileNameLength=a.readInt(2),c=a.readInt(2),this.fileName=a.readData(this.fileNameLength),a.skip(c),this.compressedSize==-1||this.uncompressedSize==-1)throw new Error(&quot;Bug or corrupted zip : didn&#39;t get enough informations from the central directory (compressedSize == -1 || uncompressedSize == -1)&quot;);if(b=f.findCompression(this.compressionMethod),null===b)throw new Error(&quot;Corrupted zip : compression &quot;+f.pretty(this.compressionMethod)+&quot; unknown (inner file : &quot;+f.transformTo(&quot;string&quot;,this.fileName)+&quot;)&quot;);if(this.decompressed=new g,this.decompressed.compressedSize=this.compressedSize,this.decompressed.uncompressedSize=this.uncompressedSize,this.decompressed.crc32=this.crc32,this.decompressed.compressionMethod=this.compressionMethod,this.decompressed.getCompressedContent=this.prepareCompressedContent(a,a.index,this.compressedSize,b),this.decompressed.getContent=this.prepareContent(a,a.index,this.compressedSize,b,this.uncompressedSize),this.loadOptions.checkCRC32&amp;&amp;(this.decompressed=f.transformTo(&quot;string&quot;,this.decompressed.getContent()),h.crc32(this.decompressed)!==this.crc32))throw new Error(&quot;Corrupted zip : CRC32 mismatch&quot;);</td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code blob-code-inner js-file-line">},readCentralPart:function(a){if(this.versionMadeBy=a.readInt(2),this.versionNeeded=a.readInt(2),this.bitFlag=a.readInt(2),this.compressionMethod=a.readString(2),this.date=a.readDate(),this.crc32=a.readInt(4),this.compressedSize=a.readInt(4),this.uncompressedSize=a.readInt(4),this.fileNameLength=a.readInt(2),this.extraFieldsLength=a.readInt(2),this.fileCommentLength=a.readInt(2),this.diskNumberStart=a.readInt(2),this.internalFileAttributes=a.readInt(2),this.externalFileAttributes=a.readInt(4),this.localHeaderOffset=a.readInt(4),this.isEncrypted())throw new Error(&quot;Encrypted zip are not supported&quot;);this.fileName=a.readData(this.fileNameLength),this.readExtraFields(a),this.parseZIP64ExtraField(a),this.fileComment=a.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var a=this.versionMadeBy&gt;&gt;8;this.dir=!!(16&amp;this.externalFileAttributes),a===j&amp;&amp;(this.dosPermissions=63&amp;this.externalFileAttributes),a===k&amp;&amp;(this.unixPermissions=this.externalFileAttributes&gt;&gt;16&amp;65535),this.dir||&quot;/&quot;!==this.fileNameStr.slice(-1)||(this.dir=!0)},parseZIP64ExtraField:function(a){if(this.extraFields[1]){var b=new e(this.extraFields[1].value);this.uncompressedSize===f.MAX_VALUE_32BITS&amp;&amp;(this.uncompressedSize=b.readInt(8)),this.compressedSize===f.MAX_VALUE_32BITS&amp;&amp;(this.compressedSize=b.readInt(8)),this.localHeaderOffset===f.MAX_VALUE_32BITS&amp;&amp;(this.localHeaderOffset=b.readInt(8)),this.diskNumberStart===f.MAX_VALUE_32BITS&amp;&amp;(this.diskNumberStart=b.readInt(4))}},readExtraFields:function(a){var b,c,d,e=a.index;for(this.extraFields=this.extraFields||{};a.index&lt;e+this.extraFieldsLength;)b=a.readInt(2),c=a.readInt(2),d=a.readString(c),this.extraFields[b]={id:b,length:c,value:d}},handleUTF8:function(){var a=i.uint8array?&quot;uint8array&quot;:&quot;array&quot;;if(this.useUTF8())this.fileNameStr=h.utf8decode(this.fileName),this.fileCommentStr=h.utf8decode(this.fileComment);else{var b=this.findExtraFieldUnicodePath();if(null!==b)this.fileNameStr=b;else{var c=f.transformTo(a,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(c)}var d=this.findExtraFieldUnicodeComment();if(null!==d)this.fileCommentStr=d;else{var e=f.transformTo(a,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(e)}}},findExtraFieldUnicodePath:function(){var a=this.extraFields[28789];if(a){var b=new e(a.value);return 1!==b.readInt(1)?null:h.crc32(this.fileName)!==b.readInt(4)?null:h.utf8decode(b.readString(a.length-5))}return null},findExtraFieldUnicodeComment:function(){var a=this.extraFields[25461];if(a){var b=new e(a.value);return 1!==b.readInt(1)?null:h.crc32(this.fileComment)!==b.readInt(4)?null:h.utf8decode(b.readString(a.length-5))}return null}},b.exports=d},{&quot;./compressedObject&quot;:3,&quot;./object&quot;:14,&quot;./stringReader&quot;:16,&quot;./support&quot;:18,&quot;./utils&quot;:22}],25:[function(a,b,c){&quot;use strict&quot;;var d=a(&quot;./lib/utils/common&quot;).assign,e=a(&quot;./lib/deflate&quot;),f=a(&quot;./lib/inflate&quot;),g=a(&quot;./lib/zlib/constants&quot;),h={};d(h,e,f,g),b.exports=h},{&quot;./lib/deflate&quot;:26,&quot;./lib/inflate&quot;:27,&quot;./lib/utils/common&quot;:28,&quot;./lib/zlib/constants&quot;:31}],26:[function(a,b,c){&quot;use strict&quot;;function d(a){if(!(this instanceof d))return new d(a);this.options=i.assign({level:s,method:u,chunkSize:16384,windowBits:15,memLevel:8,strategy:t,to:&quot;&quot;},a||{});var b=this.options;b.raw&amp;&amp;b.windowBits&gt;0?b.windowBits=-b.windowBits:b.gzip&amp;&amp;b.windowBits&gt;0&amp;&amp;b.windowBits&lt;16&amp;&amp;(b.windowBits+=16),this.err=0,this.msg=&quot;&quot;,this.ended=!1,this.chunks=[],this.strm=new l,this.strm.avail_out=0;var c=h.deflateInit2(this.strm,b.level,b.method,b.windowBits,b.memLevel,b.strategy);if(c!==p)throw new Error(k[c]);if(b.header&amp;&amp;h.deflateSetHeader(this.strm,b.header),b.dictionary){var e;if(e=&quot;string&quot;==typeof b.dictionary?j.string2buf(b.dictionary):&quot;[object ArrayBuffer]&quot;===m.call(b.dictionary)?new Uint8Array(b.dictionary):b.dictionary,c=h.deflateSetDictionary(this.strm,e),c!==p)throw new Error(k[c]);this._dict_set=!0}}function e(a,b){var c=new d(b);if(c.push(a,!0),c.err)throw c.msg;return c.result}function f(a,b){return b=b||{},b.raw=!0,e(a,b)}function g(a,b){return b=b||{},b.gzip=!0,e(a,b)}var h=a(&quot;./zlib/deflate&quot;),i=a(&quot;./utils/common&quot;),j=a(&quot;./utils/strings&quot;),k=a(&quot;./zlib/messages&quot;),l=a(&quot;./zlib/zstream&quot;),m=Object.prototype.toString,n=0,o=4,p=0,q=1,r=2,s=-1,t=0,u=8;d.prototype.push=function(a,b){var c,d,e=this.strm,f=this.options.chunkSize;if(this.ended)return!1;d=b===~~b?b:b===!0?o:n,&quot;string&quot;==typeof a?e.input=j.string2buf(a):&quot;[object ArrayBuffer]&quot;===m.call(a)?e.input=new Uint8Array(a):e.input=a,e.next_in=0,e.avail_in=e.input.length;do{if(0===e.avail_out&amp;&amp;(e.output=new i.Buf8(f),e.next_out=0,e.avail_out=f),c=h.deflate(e,d),c!==q&amp;&amp;c!==p)return this.onEnd(c),this.ended=!0,!1;0!==e.avail_out&amp;&amp;(0!==e.avail_in||d!==o&amp;&amp;d!==r)||(&quot;string&quot;===this.options.to?this.onData(j.buf2binstring(i.shrinkBuf(e.output,e.next_out))):this.onData(i.shrinkBuf(e.output,e.next_out)))}while((e.avail_in&gt;0||0===e.avail_out)&amp;&amp;c!==q);return d===o?(c=h.deflateEnd(this.strm),this.onEnd(c),this.ended=!0,c===p):d!==r||(this.onEnd(p),e.avail_out=0,!0)},d.prototype.onData=function(a){this.chunks.push(a)},d.prototype.onEnd=function(a){a===p&amp;&amp;(&quot;string&quot;===this.options.to?this.result=this.chunks.join(&quot;&quot;):this.result=i.flattenChunks(this.chunks)),this.chunks=[],this.err=a,this.msg=this.strm.msg},c.Deflate=d,c.deflate=e,c.deflateRaw=f,c.gzip=g},{&quot;./utils/common&quot;:28,&quot;./utils/strings&quot;:29,&quot;./zlib/deflate&quot;:33,&quot;./zlib/messages&quot;:38,&quot;./zlib/zstream&quot;:40}],27:[function(a,b,c){&quot;use strict&quot;;function d(a){if(!(this instanceof d))return new d(a);this.options=h.assign({chunkSize:16384,windowBits:0,to:&quot;&quot;},a||{});var b=this.options;b.raw&amp;&amp;b.windowBits&gt;=0&amp;&amp;b.windowBits&lt;16&amp;&amp;(b.windowBits=-b.windowBits,0===b.windowBits&amp;&amp;(b.windowBits=-15)),!(b.windowBits&gt;=0&amp;&amp;b.windowBits&lt;16)||a&amp;&amp;a.windowBits||(b.windowBits+=32),b.windowBits&gt;15&amp;&amp;b.windowBits&lt;48&amp;&amp;0===(15&amp;b.windowBits)&amp;&amp;(b.windowBits|=15),this.err=0,this.msg=&quot;&quot;,this.ended=!1,this.chunks=[],this.strm=new l,this.strm.avail_out=0;var c=g.inflateInit2(this.strm,b.windowBits);if(c!==j.Z_OK)throw new Error(k[c]);this.header=new m,g.inflateGetHeader(this.strm,this.header)}function e(a,b){var c=new d(b);if(c.push(a,!0),c.err)throw c.msg;return c.result}function f(a,b){return b=b||{},b.raw=!0,e(a,b)}var g=a(&quot;./zlib/inflate&quot;),h=a(&quot;./utils/common&quot;),i=a(&quot;./utils/strings&quot;),j=a(&quot;./zlib/constants&quot;),k=a(&quot;./zlib/messages&quot;),l=a(&quot;./zlib/zstream&quot;),m=a(&quot;./zlib/gzheader&quot;),n=Object.prototype.toString;d.prototype.push=function(a,b){var c,d,e,f,k,l,m=this.strm,o=this.options.chunkSize,p=this.options.dictionary,q=!1;if(this.ended)return!1;d=b===~~b?b:b===!0?j.Z_FINISH:j.Z_NO_FLUSH,&quot;string&quot;==typeof a?m.input=i.binstring2buf(a):&quot;[object ArrayBuffer]&quot;===n.call(a)?m.input=new Uint8Array(a):m.input=a,m.next_in=0,m.avail_in=m.input.length;do{if(0===m.avail_out&amp;&amp;(m.output=new h.Buf8(o),m.next_out=0,m.avail_out=o),c=g.inflate(m,j.Z_NO_FLUSH),c===j.Z_NEED_DICT&amp;&amp;p&amp;&amp;(l=&quot;string&quot;==typeof p?i.string2buf(p):&quot;[object ArrayBuffer]&quot;===n.call(p)?new Uint8Array(p):p,c=g.inflateSetDictionary(this.strm,l)),c===j.Z_BUF_ERROR&amp;&amp;q===!0&amp;&amp;(c=j.Z_OK,q=!1),c!==j.Z_STREAM_END&amp;&amp;c!==j.Z_OK)return this.onEnd(c),this.ended=!0,!1;m.next_out&amp;&amp;(0!==m.avail_out&amp;&amp;c!==j.Z_STREAM_END&amp;&amp;(0!==m.avail_in||d!==j.Z_FINISH&amp;&amp;d!==j.Z_SYNC_FLUSH)||(&quot;string&quot;===this.options.to?(e=i.utf8border(m.output,m.next_out),f=m.next_out-e,k=i.buf2string(m.output,e),m.next_out=f,m.avail_out=o-f,f&amp;&amp;h.arraySet(m.output,m.output,e,f,0),this.onData(k)):this.onData(h.shrinkBuf(m.output,m.next_out)))),0===m.avail_in&amp;&amp;0===m.avail_out&amp;&amp;(q=!0)}while((m.avail_in&gt;0||0===m.avail_out)&amp;&amp;c!==j.Z_STREAM_END);return c===j.Z_STREAM_END&amp;&amp;(d=j.Z_FINISH),d===j.Z_FINISH?(c=g.inflateEnd(this.strm),this.onEnd(c),this.ended=!0,c===j.Z_OK):d!==j.Z_SYNC_FLUSH||(this.onEnd(j.Z_OK),m.avail_out=0,!0)},d.prototype.onData=function(a){this.chunks.push(a)},d.prototype.onEnd=function(a){a===j.Z_OK&amp;&amp;(&quot;string&quot;===this.options.to?this.result=this.chunks.join(&quot;&quot;):this.result=h.flattenChunks(this.chunks)),this.chunks=[],this.err=a,this.msg=this.strm.msg},c.Inflate=d,c.inflate=e,c.inflateRaw=f,c.ungzip=e},{&quot;./utils/common&quot;:28,&quot;./utils/strings&quot;:29,&quot;./zlib/constants&quot;:31,&quot;./zlib/gzheader&quot;:34,&quot;./zlib/inflate&quot;:36,&quot;./zlib/messages&quot;:38,&quot;./zlib/zstream&quot;:40}],28:[function(a,b,c){&quot;use strict&quot;;var d=&quot;undefined&quot;!=typeof Uint8Array&amp;&amp;&quot;undefined&quot;!=typeof Uint16Array&amp;&amp;&quot;undefined&quot;!=typeof Int32Array;c.assign=function(a){for(var b=Array.prototype.slice.call(arguments,1);b.length;){var c=b.shift();if(c){if(&quot;object&quot;!=typeof c)throw new TypeError(c+&quot;must be non-object&quot;);for(var d in c)c.hasOwnProperty(d)&amp;&amp;(a[d]=c[d])}}return a},c.shrinkBuf=function(a,b){return a.length===b?a:a.subarray?a.subarray(0,b):(a.length=b,a)};var e={arraySet:function(a,b,c,d,e){if(b.subarray&amp;&amp;a.subarray)return void a.set(b.subarray(c,c+d),e);for(var f=0;f&lt;d;f++)a[e+f]=b[c+f]},flattenChunks:function(a){var b,c,d,e,f,g;for(d=0,b=0,c=a.length;b&lt;c;b++)d+=a[b].length;for(g=new Uint8Array(d),e=0,b=0,c=a.length;b&lt;c;b++)f=a[b],g.set(f,e),e+=f.length;return g}},f={arraySet:function(a,b,c,d,e){for(var f=0;f&lt;d;f++)a[e+f]=b[c+f]},flattenChunks:function(a){return[].concat.apply([],a)}};c.setTyped=function(a){a?(c.Buf8=Uint8Array,c.Buf16=Uint16Array,c.Buf32=Int32Array,c.assign(c,e)):(c.Buf8=Array,c.Buf16=Array,c.Buf32=Array,c.assign(c,f))},c.setTyped(d)},{}],29:[function(a,b,c){&quot;use strict&quot;;function d(a,b){if(b&lt;65537&amp;&amp;(a.subarray&amp;&amp;g||!a.subarray&amp;&amp;f))return String.fromCharCode.apply(null,e.shrinkBuf(a,b));for(var c=&quot;&quot;,d=0;d&lt;b;d++)c+=String.fromCharCode(a[d]);return c}var e=a(&quot;./common&quot;),f=!0,g=!0;try{String.fromCharCode.apply(null,[0])}catch(h){f=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch(h){g=!1}for(var i=new e.Buf8(256),j=0;j&lt;256;j++)i[j]=j&gt;=252?6:j&gt;=248?5:j&gt;=240?4:j&gt;=224?3:j&gt;=192?2:1;i[254]=i[254]=1,c.string2buf=function(a){var b,c,d,f,g,h=a.length,i=0;for(f=0;f&lt;h;f++)c=a.charCodeAt(f),55296===(64512&amp;c)&amp;&amp;f+1&lt;h&amp;&amp;(d=a.charCodeAt(f+1),56320===(64512&amp;d)&amp;&amp;(c=65536+(c-55296&lt;&lt;10)+(d-56320),f++)),i+=c&lt;128?1:c&lt;2048?2:c&lt;65536?3:4;for(b=new e.Buf8(i),g=0,f=0;g&lt;i;f++)c=a.charCodeAt(f),55296===(64512&amp;c)&amp;&amp;f+1&lt;h&amp;&amp;(d=a.charCodeAt(f+1),56320===(64512&amp;d)&amp;&amp;(c=65536+(c-55296&lt;&lt;10)+(d-56320),f++)),c&lt;128?b[g++]=c:c&lt;2048?(b[g++]=192|c&gt;&gt;&gt;6,b[g++]=128|63&amp;c):c&lt;65536?(b[g++]=224|c&gt;&gt;&gt;12,b[g++]=128|c&gt;&gt;&gt;6&amp;63,b[g++]=128|63&amp;c):(b[g++]=240|c&gt;&gt;&gt;18,b[g++]=128|c&gt;&gt;&gt;12&amp;63,b[g++]=128|c&gt;&gt;&gt;6&amp;63,b[g++]=128|63&amp;c);return b},c.buf2binstring=function(a){return d(a,a.length)},c.binstring2buf=function(a){for(var b=new e.Buf8(a.length),c=0,d=b.length;c&lt;d;c++)b[c]=a.charCodeAt(c);return b},c.buf2string=function(a,b){var c,e,f,g,h=b||a.length,j=new Array(2*h);for(e=0,c=0;c&lt;h;)if(f=a[c++],f&lt;128)j[e++]=f;else if(g=i[f],g&gt;4)j[e++]=65533,c+=g-1;else{for(f&amp;=2===g?31:3===g?15:7;g&gt;1&amp;&amp;c&lt;h;)f=f&lt;&lt;6|63&amp;a[c++],g--;g&gt;1?j[e++]=65533:f&lt;65536?j[e++]=f:(f-=65536,j[e++]=55296|f&gt;&gt;10&amp;1023,j[e++]=56320|1023&amp;f)}return d(j,e)},c.utf8border=function(a,b){var c;for(b=b||a.length,b&gt;a.length&amp;&amp;(b=a.length),c=b-1;c&gt;=0&amp;&amp;128===(192&amp;a[c]);)c--;return c&lt;0?b:0===c?b:c+i[a[c]]&gt;b?c:b}},{&quot;./common&quot;:28}],30:[function(a,b,c){&quot;use strict&quot;;function d(a,b,c,d){for(var e=65535&amp;a|0,f=a&gt;&gt;&gt;16&amp;65535|0,g=0;0!==c;){g=c&gt;2e3?2e3:c,c-=g;do e=e+b[d++]|0,f=f+e|0;while(--g);e%=65521,f%=65521}return e|f&lt;&lt;16|0}b.exports=d},{}],31:[function(a,b,c){&quot;use strict&quot;;b.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],32:[function(a,b,c){&quot;use strict&quot;;function d(){for(var a,b=[],c=0;c&lt;256;c++){a=c;for(var d=0;d&lt;8;d++)a=1&amp;a?3988292384^a&gt;&gt;&gt;1:a&gt;&gt;&gt;1;b[c]=a}return b}function e(a,b,c,d){var e=f,g=d+c;a^=-1;for(var h=d;h&lt;g;h++)a=a&gt;&gt;&gt;8^e[255&amp;(a^b[h])];return a^-1}var f=d();b.exports=e},{}],33:[function(a,b,c){&quot;use strict&quot;;function d(a,b){return a.msg=I[b],b}function e(a){return(a&lt;&lt;1)-(a&gt;4?9:0)}function f(a){for(var b=a.length;--b&gt;=0;)a[b]=0}function g(a){var b=a.state,c=b.pending;c&gt;a.avail_out&amp;&amp;(c=a.avail_out),0!==c&amp;&amp;(E.arraySet(a.output,b.pending_buf,b.pending_out,c,a.next_out),a.next_out+=c,b.pending_out+=c,a.total_out+=c,a.avail_out-=c,b.pending-=c,0===b.pending&amp;&amp;(b.pending_out=0))}function h(a,b){F._tr_flush_block(a,a.block_start&gt;=0?a.block_start:-1,a.strstart-a.block_start,b),a.block_start=a.strstart,g(a.strm)}function i(a,b){a.pending_buf[a.pending++]=b}function j(a,b){a.pending_buf[a.pending++]=b&gt;&gt;&gt;8&amp;255,a.pending_buf[a.pending++]=255&amp;b}function k(a,b,c,d){var e=a.avail_in;return e&gt;d&amp;&amp;(e=d),0===e?0:(a.avail_in-=e,E.arraySet(b,a.input,a.next_in,e,c),1===a.state.wrap?a.adler=G(a.adler,b,e,c):2===a.state.wrap&amp;&amp;(a.adler=H(a.adler,b,e,c)),a.next_in+=e,a.total_in+=e,e)}function l(a,b){var c,d,e=a.max_chain_length,f=a.strstart,g=a.prev_length,h=a.nice_match,i=a.strstart&gt;a.w_size-la?a.strstart-(a.w_size-la):0,j=a.window,k=a.w_mask,l=a.prev,m=a.strstart+ka,n=j[f+g-1],o=j[f+g];a.prev_length&gt;=a.good_match&amp;&amp;(e&gt;&gt;=2),h&gt;a.lookahead&amp;&amp;(h=a.lookahead);do if(c=b,j[c+g]===o&amp;&amp;j[c+g-1]===n&amp;&amp;j[c]===j[f]&amp;&amp;j[++c]===j[f+1]){f+=2,c++;do;while(j[++f]===j[++c]&amp;&amp;j[++f]===j[++c]&amp;&amp;j[++f]===j[++c]&amp;&amp;j[++f]===j[++c]&amp;&amp;j[++f]===j[++c]&amp;&amp;j[++f]===j[++c]&amp;&amp;j[++f]===j[++c]&amp;&amp;j[++f]===j[++c]&amp;&amp;f&lt;m);if(d=ka-(m-f),f=m-ka,d&gt;g){if(a.match_start=b,g=d,d&gt;=h)break;n=j[f+g-1],o=j[f+g]}}while((b=l[b&amp;k])&gt;i&amp;&amp;0!==--e);return g&lt;=a.lookahead?g:a.lookahead}function m(a){var b,c,d,e,f,g=a.w_size;do{if(e=a.window_size-a.lookahead-a.strstart,a.strstart&gt;=g+(g-la)){E.arraySet(a.window,a.window,g,g,0),a.match_start-=g,a.strstart-=g,a.block_start-=g,c=a.hash_size,b=c;do d=a.head[--b],a.head[b]=d&gt;=g?d-g:0;while(--c);c=g,b=c;do d=a.prev[--b],a.prev[b]=d&gt;=g?d-g:0;while(--c);e+=g}if(0===a.strm.avail_in)break;if(c=k(a.strm,a.window,a.strstart+a.lookahead,e),a.lookahead+=c,a.lookahead+a.insert&gt;=ja)for(f=a.strstart-a.insert,a.ins_h=a.window[f],a.ins_h=(a.ins_h&lt;&lt;a.hash_shift^a.window[f+1])&amp;a.hash_mask;a.insert&amp;&amp;(a.ins_h=(a.ins_h&lt;&lt;a.hash_shift^a.window[f+ja-1])&amp;a.hash_mask,a.prev[f&amp;a.w_mask]=a.head[a.ins_h],a.head[a.ins_h]=f,f++,a.insert--,!(a.lookahead+a.insert&lt;ja)););}while(a.lookahead&lt;la&amp;&amp;0!==a.strm.avail_in)}function n(a,b){var c=65535;for(c&gt;a.pending_buf_size-5&amp;&amp;(c=a.pending_buf_size-5);;){if(a.lookahead&lt;=1){if(m(a),0===a.lookahead&amp;&amp;b===J)return ua;if(0===a.lookahead)break}a.strstart+=a.lookahead,a.lookahead=0;var d=a.block_start+c;if((0===a.strstart||a.strstart&gt;=d)&amp;&amp;(a.lookahead=a.strstart-d,a.strstart=d,h(a,!1),0===a.strm.avail_out))return ua;if(a.strstart-a.block_start&gt;=a.w_size-la&amp;&amp;(h(a,!1),0===a.strm.avail_out))return ua}return a.insert=0,b===M?(h(a,!0),0===a.strm.avail_out?wa:xa):a.strstart&gt;a.block_start&amp;&amp;(h(a,!1),0===a.strm.avail_out)?ua:ua}function o(a,b){for(var c,d;;){if(a.lookahead&lt;la){if(m(a),a.lookahead&lt;la&amp;&amp;b===J)return ua;if(0===a.lookahead)break}if(c=0,a.lookahead&gt;=ja&amp;&amp;(a.ins_h=(a.ins_h&lt;&lt;a.hash_shift^a.window[a.strstart+ja-1])&amp;a.hash_mask,c=a.prev[a.strstart&amp;a.w_mask]=a.head[a.ins_h],a.head[a.ins_h]=a.strstart),0!==c&amp;&amp;a.strstart-c&lt;=a.w_size-la&amp;&amp;(a.match_length=l(a,c)),a.match_length&gt;=ja)if(d=F._tr_tally(a,a.strstart-a.match_start,a.match_length-ja),a.lookahead-=a.match_length,a.match_length&lt;=a.max_lazy_match&amp;&amp;a.lookahead&gt;=ja){a.match_length--;do a.strstart++,a.ins_h=(a.ins_h&lt;&lt;a.hash_shift^a.window[a.strstart+ja-1])&amp;a.hash_mask,c=a.prev[a.strstart&amp;a.w_mask]=a.head[a.ins_h],a.head[a.ins_h]=a.strstart;while(0!==--a.match_length);a.strstart++}else a.strstart+=a.match_length,a.match_length=0,a.ins_h=a.window[a.strstart],a.ins_h=(a.ins_h&lt;&lt;a.hash_shift^a.window[a.strstart+1])&amp;a.hash_mask;else d=F._tr_tally(a,0,a.window[a.strstart]),a.lookahead--,a.strstart++;if(d&amp;&amp;(h(a,!1),0===a.strm.avail_out))return ua}return a.insert=a.strstart&lt;ja-1?a.strstart:ja-1,b===M?(h(a,!0),0===a.strm.avail_out?wa:xa):a.last_lit&amp;&amp;(h(a,!1),0===a.strm.avail_out)?ua:va}function p(a,b){for(var c,d,e;;){if(a.lookahead&lt;la){if(m(a),a.lookahead&lt;la&amp;&amp;b===J)return ua;if(0===a.lookahead)break}if(c=0,a.lookahead&gt;=ja&amp;&amp;(a.ins_h=(a.ins_h&lt;&lt;a.hash_shift^a.window[a.strstart+ja-1])&amp;a.hash_mask,c=a.prev[a.strstart&amp;a.w_mask]=a.head[a.ins_h],a.head[a.ins_h]=a.strstart),a.prev_length=a.match_length,a.prev_match=a.match_start,a.match_length=ja-1,0!==c&amp;&amp;a.prev_length&lt;a.max_lazy_match&amp;&amp;a.strstart-c&lt;=a.w_size-la&amp;&amp;(a.match_length=l(a,c),a.match_length&lt;=5&amp;&amp;(a.strategy===U||a.match_length===ja&amp;&amp;a.strstart-a.match_start&gt;4096)&amp;&amp;(a.match_length=ja-1)),a.prev_length&gt;=ja&amp;&amp;a.match_length&lt;=a.prev_length){e=a.strstart+a.lookahead-ja,d=F._tr_tally(a,a.strstart-1-a.prev_match,a.prev_length-ja),a.lookahead-=a.prev_length-1,a.prev_length-=2;do++a.strstart&lt;=e&amp;&amp;(a.ins_h=(a.ins_h&lt;&lt;a.hash_shift^a.window[a.strstart+ja-1])&amp;a.hash_mask,c=a.prev[a.strstart&amp;a.w_mask]=a.head[a.ins_h],a.head[a.ins_h]=a.strstart);while(0!==--a.prev_length);if(a.match_available=0,a.match_length=ja-1,a.strstart++,d&amp;&amp;(h(a,!1),0===a.strm.avail_out))return ua}else if(a.match_available){if(d=F._tr_tally(a,0,a.window[a.strstart-1]),d&amp;&amp;h(a,!1),a.strstart++,a.lookahead--,0===a.strm.avail_out)return ua}else a.match_available=1,a.strstart++,a.lookahead--}return a.match_available&amp;&amp;(d=F._tr_tally(a,0,a.window[a.strstart-1]),a.match_available=0),a.insert=a.strstart&lt;ja-1?a.strstart:ja-1,b===M?(h(a,!0),0===a.strm.avail_out?wa:xa):a.last_lit&amp;&amp;(h(a,!1),0===a.strm.avail_out)?ua:va}function q(a,b){for(var c,d,e,f,g=a.window;;){if(a.lookahead&lt;=ka){if(m(a),a.lookahead&lt;=ka&amp;&amp;b===J)return ua;if(0===a.lookahead)break}if(a.match_length=0,a.lookahead&gt;=ja&amp;&amp;a.strstart&gt;0&amp;&amp;(e=a.strstart-1,d=g[e],d===g[++e]&amp;&amp;d===g[++e]&amp;&amp;d===g[++e])){f=a.strstart+ka;do;while(d===g[++e]&amp;&amp;d===g[++e]&amp;&amp;d===g[++e]&amp;&amp;d===g[++e]&amp;&amp;d===g[++e]&amp;&amp;d===g[++e]&amp;&amp;d===g[++e]&amp;&amp;d===g[++e]&amp;&amp;e&lt;f);a.match_length=ka-(f-e),a.match_length&gt;a.lookahead&amp;&amp;(a.match_length=a.lookahead)}if(a.match_length&gt;=ja?(c=F._tr_tally(a,1,a.match_length-ja),a.lookahead-=a.match_length,a.strstart+=a.match_length,a.match_length=0):(c=F._tr_tally(a,0,a.window[a.strstart]),a.lookahead--,a.strstart++),c&amp;&amp;(h(a,!1),0===a.strm.avail_out))return ua}return a.insert=0,b===M?(h(a,!0),0===a.strm.avail_out?wa:xa):a.last_lit&amp;&amp;(h(a,!1),0===a.strm.avail_out)?ua:va}function r(a,b){for(var c;;){if(0===a.lookahead&amp;&amp;(m(a),0===a.lookahead)){if(b===J)return ua;break}if(a.match_length=0,c=F._tr_tally(a,0,a.window[a.strstart]),a.lookahead--,a.strstart++,c&amp;&amp;(h(a,!1),0===a.strm.avail_out))return ua}return a.insert=0,b===M?(h(a,!0),0===a.strm.avail_out?wa:xa):a.last_lit&amp;&amp;(h(a,!1),0===a.strm.avail_out)?ua:va}function s(a,b,c,d,e){this.good_length=a,this.max_lazy=b,this.nice_length=c,this.max_chain=d,this.func=e}function t(a){a.window_size=2*a.w_size,f(a.head),a.max_lazy_match=D[a.level].max_lazy,a.good_match=D[a.level].good_length,a.nice_match=D[a.level].nice_length,a.max_chain_length=D[a.level].max_chain,a.strstart=0,a.block_start=0,a.lookahead=0,a.insert=0,a.match_length=a.prev_length=ja-1,a.match_available=0,a.ins_h=0}function u(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=$,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new E.Buf16(2*ha),this.dyn_dtree=new E.Buf16(2*(2*fa+1)),this.bl_tree=new E.Buf16(2*(2*ga+1)),f(this.dyn_ltree),f(this.dyn_dtree),f(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new E.Buf16(ia+1),this.heap=new E.Buf16(2*ea+1),f(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new E.Buf16(2*ea+1),f(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function v(a){var b;return a&amp;&amp;a.state?(a.total_in=a.total_out=0,a.data_type=Z,b=a.state,b.pending=0,b.pending_out=0,b.wrap&lt;0&amp;&amp;(b.wrap=-b.wrap),b.status=b.wrap?na:sa,a.adler=2===b.wrap?0:1,b.last_flush=J,F._tr_init(b),O):d(a,Q)}function w(a){var b=v(a);return b===O&amp;&amp;t(a.state),b}function x(a,b){return a&amp;&amp;a.state?2!==a.state.wrap?Q:(a.state.gzhead=b,O):Q}function y(a,b,c,e,f,g){if(!a)return Q;var h=1;if(b===T&amp;&amp;(b=6),e&lt;0?(h=0,e=-e):e&gt;15&amp;&amp;(h=2,e-=16),f&lt;1||f&gt;_||c!==$||e&lt;8||e&gt;15||b&lt;0||b&gt;9||g&lt;0||g&gt;X)return d(a,Q);8===e&amp;&amp;(e=9);var i=new u;return a.state=i,i.strm=a,i.wrap=h,i.gzhead=null,i.w_bits=e,i.w_size=1&lt;&lt;i.w_bits,i.w_mask=i.w_size-1,i.hash_bits=f+7,i.hash_size=1&lt;&lt;i.hash_bits,i.hash_mask=i.hash_size-1,i.hash_shift=~~((i.hash_bits+ja-1)/ja),i.window=new E.Buf8(2*i.w_size),i.head=new E.Buf16(i.hash_size),i.prev=new E.Buf16(i.w_size),i.lit_bufsize=1&lt;&lt;f+6,i.pending_buf_size=4*i.lit_bufsize,i.pending_buf=new E.Buf8(i.pending_buf_size),i.d_buf=1*i.lit_bufsize,i.l_buf=3*i.lit_bufsize,i.level=b,i.strategy=g,i.method=c,w(a)}function z(a,b){return y(a,b,$,aa,ba,Y)}function A(a,b){var c,h,k,l;if(!a||!a.state||b&gt;N||b&lt;0)return a?d(a,Q):Q;if(h=a.state,!a.output||!a.input&amp;&amp;0!==a.avail_in||h.status===ta&amp;&amp;b!==M)return d(a,0===a.avail_out?S:Q);if(h.strm=a,c=h.last_flush,h.last_flush=b,h.status===na)if(2===h.wrap)a.adler=0,i(h,31),i(h,139),i(h,8),h.gzhead?(i(h,(h.gzhead.text?1:0)+(h.gzhead.hcrc?2:0)+(h.gzhead.extra?4:0)+(h.gzhead.name?8:0)+(h.gzhead.comment?16:0)),i(h,255&amp;h.gzhead.time),i(h,h.gzhead.time&gt;&gt;8&amp;255),i(h,h.gzhead.time&gt;&gt;16&amp;255),i(h,h.gzhead.time&gt;&gt;24&amp;255),i(h,9===h.level?2:h.strategy&gt;=V||h.level&lt;2?4:0),i(h,255&amp;h.gzhead.os),h.gzhead.extra&amp;&amp;h.gzhead.extra.length&amp;&amp;(i(h,255&amp;h.gzhead.extra.length),i(h,h.gzhead.extra.length&gt;&gt;8&amp;255)),h.gzhead.hcrc&amp;&amp;(a.adler=H(a.adler,h.pending_buf,h.pending,0)),h.gzindex=0,h.status=oa):(i(h,0),i(h,0),i(h,0),i(h,0),i(h,0),i(h,9===h.level?2:h.strategy&gt;=V||h.level&lt;2?4:0),i(h,ya),h.status=sa);else{var m=$+(h.w_bits-8&lt;&lt;4)&lt;&lt;8,n=-1;n=h.strategy&gt;=V||h.level&lt;2?0:h.level&lt;6?1:6===h.level?2:3,m|=n&lt;&lt;6,0!==h.strstart&amp;&amp;(m|=ma),m+=31-m%31,h.status=sa,j(h,m),0!==h.strstart&amp;&amp;(j(h,a.adler&gt;&gt;&gt;16),j(h,65535&amp;a.adler)),a.adler=1}if(h.status===oa)if(h.gzhead.extra){for(k=h.pending;h.gzindex&lt;(65535&amp;h.gzhead.extra.length)&amp;&amp;(h.pending!==h.pending_buf_size||(h.gzhead.hcrc&amp;&amp;h.pending&gt;k&amp;&amp;(a.adler=H(a.adler,h.pending_buf,h.pending-k,k)),g(a),k=h.pending,h.pending!==h.pending_buf_size));)i(h,255&amp;h.gzhead.extra[h.gzindex]),h.gzindex++;h.gzhead.hcrc&amp;&amp;h.pending&gt;k&amp;&amp;(a.adler=H(a.adler,h.pending_buf,h.pending-k,k)),h.gzindex===h.gzhead.extra.length&amp;&amp;(h.gzindex=0,h.status=pa)}else h.status=pa;if(h.status===pa)if(h.gzhead.name){k=h.pending;do{if(h.pending===h.pending_buf_size&amp;&amp;(h.gzhead.hcrc&amp;&amp;h.pending&gt;k&amp;&amp;(a.adler=H(a.adler,h.pending_buf,h.pending-k,k)),g(a),k=h.pending,h.pending===h.pending_buf_size)){l=1;break}l=h.gzindex&lt;h.gzhead.name.length?255&amp;h.gzhead.name.charCodeAt(h.gzindex++):0,i(h,l)}while(0!==l);h.gzhead.hcrc&amp;&amp;h.pending&gt;k&amp;&amp;(a.adler=H(a.adler,h.pending_buf,h.pending-k,k)),0===l&amp;&amp;(h.gzindex=0,h.status=qa)}else h.status=qa;if(h.status===qa)if(h.gzhead.comment){k=h.pending;do{if(h.pending===h.pending_buf_size&amp;&amp;(h.gzhead.hcrc&amp;&amp;h.pending&gt;k&amp;&amp;(a.adler=H(a.adler,h.pending_buf,h.pending-k,k)),g(a),k=h.pending,h.pending===h.pending_buf_size)){l=1;break}l=h.gzindex&lt;h.gzhead.comment.length?255&amp;h.gzhead.comment.charCodeAt(h.gzindex++):0,i(h,l)}while(0!==l);h.gzhead.hcrc&amp;&amp;h.pending&gt;k&amp;&amp;(a.adler=H(a.adler,h.pending_buf,h.pending-k,k)),0===l&amp;&amp;(h.status=ra)}else h.status=ra;if(h.status===ra&amp;&amp;(h.gzhead.hcrc?(h.pending+2&gt;h.pending_buf_size&amp;&amp;g(a),h.pending+2&lt;=h.pending_buf_size&amp;&amp;(i(h,255&amp;a.adler),i(h,a.adler&gt;&gt;8&amp;255),a.adler=0,h.status=sa)):h.status=sa),0!==h.pending){if(g(a),0===a.avail_out)return h.last_flush=-1,O}else if(0===a.avail_in&amp;&amp;e(b)&lt;=e(c)&amp;&amp;b!==M)return d(a,S);if(h.status===ta&amp;&amp;0!==a.avail_in)return d(a,S);if(0!==a.avail_in||0!==h.lookahead||b!==J&amp;&amp;h.status!==ta){var o=h.strategy===V?r(h,b):h.strategy===W?q(h,b):D[h.level].func(h,b);if(o!==wa&amp;&amp;o!==xa||(h.status=ta),o===ua||o===wa)return 0===a.avail_out&amp;&amp;(h.last_flush=-1),O;if(o===va&amp;&amp;(b===K?F._tr_align(h):b!==N&amp;&amp;(F._tr_stored_block(h,0,0,!1),b===L&amp;&amp;(f(h.head),0===h.lookahead&amp;&amp;(h.strstart=0,h.block_start=0,h.insert=0))),g(a),0===a.avail_out))return h.last_flush=-1,O}return b!==M?O:h.wrap&lt;=0?P:(2===h.wrap?(i(h,255&amp;a.adler),i(h,a.adler&gt;&gt;8&amp;255),i(h,a.adler&gt;&gt;16&amp;255),i(h,a.adler&gt;&gt;24&amp;255),i(h,255&amp;a.total_in),i(h,a.total_in&gt;&gt;8&amp;255),i(h,a.total_in&gt;&gt;16&amp;255),i(h,a.total_in&gt;&gt;24&amp;255)):(j(h,a.adler&gt;&gt;&gt;16),j(h,65535&amp;a.adler)),g(a),h.wrap&gt;0&amp;&amp;(h.wrap=-h.wrap),0!==h.pending?O:P)}function B(a){var b;return a&amp;&amp;a.state?(b=a.state.status,b!==na&amp;&amp;b!==oa&amp;&amp;b!==pa&amp;&amp;b!==qa&amp;&amp;b!==ra&amp;&amp;b!==sa&amp;&amp;b!==ta?d(a,Q):(a.state=null,b===sa?d(a,R):O)):Q}function C(a,b){var c,d,e,g,h,i,j,k,l=b.length;if(!a||!a.state)return Q;if(c=a.state,g=c.wrap,2===g||1===g&amp;&amp;c.status!==na||c.lookahead)return Q;for(1===g&amp;&amp;(a.adler=G(a.adler,b,l,0)),c.wrap=0,l&gt;=c.w_size&amp;&amp;(0===g&amp;&amp;(f(c.head),c.strstart=0,c.block_start=0,c.insert=0),k=new E.Buf8(c.w_size),E.arraySet(k,b,l-c.w_size,c.w_size,0),b=k,l=c.w_size),h=a.avail_in,i=a.next_in,j=a.input,a.avail_in=l,a.next_in=0,a.input=b,m(c);c.lookahead&gt;=ja;){d=c.strstart,e=c.lookahead-(ja-1);do c.ins_h=(c.ins_h&lt;&lt;c.hash_shift^c.window[d+ja-1])&amp;c.hash_mask,c.prev[d&amp;c.w_mask]=c.head[c.ins_h],c.head[c.ins_h]=d,d++;while(--e);c.strstart=d,c.lookahead=ja-1,m(c)}return c.strstart+=c.lookahead,c.block_start=c.strstart,c.insert=c.lookahead,c.lookahead=0,c.match_length=c.prev_length=ja-1,c.match_available=0,a.next_in=i,a.input=j,a.avail_in=h,c.wrap=g,O}var D,E=a(&quot;../utils/common&quot;),F=a(&quot;./trees&quot;),G=a(&quot;./adler32&quot;),H=a(&quot;./crc32&quot;),I=a(&quot;./messages&quot;),J=0,K=1,L=3,M=4,N=5,O=0,P=1,Q=-2,R=-3,S=-5,T=-1,U=1,V=2,W=3,X=4,Y=0,Z=2,$=8,_=9,aa=15,ba=8,ca=29,da=256,ea=da+1+ca,fa=30,ga=19,ha=2*ea+1,ia=15,ja=3,ka=258,la=ka+ja+1,ma=32,na=42,oa=69,pa=73,qa=91,ra=103,sa=113,ta=666,ua=1,va=2,wa=3,xa=4,ya=3;D=[new s(0,0,0,0,n),new s(4,4,8,4,o),new s(4,5,16,8,o),new s(4,6,32,32,o),new s(4,4,16,16,p),new s(8,16,32,32,p),new s(8,16,128,128,p),new s(8,32,128,256,p),new s(32,128,258,1024,p),new s(32,258,258,4096,p)],c.deflateInit=z,c.deflateInit2=y,c.deflateReset=w,c.deflateResetKeep=v,c.deflateSetHeader=x,c.deflate=A,c.deflateEnd=B,c.deflateSetDictionary=C,c.deflateInfo=&quot;pako deflate (from Nodeca project)&quot;},{&quot;../utils/common&quot;:28,&quot;./adler32&quot;:30,&quot;./crc32&quot;:32,&quot;./messages&quot;:38,&quot;./trees&quot;:39}],34:[function(a,b,c){&quot;use strict&quot;;function d(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name=&quot;&quot;,this.comment=&quot;&quot;,this.hcrc=0,this.done=!1}b.exports=d},{}],35:[function(a,b,c){&quot;use strict&quot;;var d=30,e=12;b.exports=function(a,b){var c,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C;c=a.state,f=a.next_in,B=a.input,g=f+(a.avail_in-5),h=a.next_out,C=a.output,i=h-(b-a.avail_out),j=h+(a.avail_out-257),k=c.dmax,l=c.wsize,m=c.whave,n=c.wnext,o=c.window,p=c.hold,q=c.bits,r=c.lencode,s=c.distcode,t=(1&lt;&lt;c.lenbits)-1,u=(1&lt;&lt;c.distbits)-1;a:do{q&lt;15&amp;&amp;(p+=B[f++]&lt;&lt;q,q+=8,p+=B[f++]&lt;&lt;q,q+=8),v=r[p&amp;t];b:for(;;){if(w=v&gt;&gt;&gt;24,p&gt;&gt;&gt;=w,q-=w,w=v&gt;&gt;&gt;16&amp;255,0===w)C[h++]=65535&amp;v;else{if(!(16&amp;w)){if(0===(64&amp;w)){v=r[(65535&amp;v)+(p&amp;(1&lt;&lt;w)-1)];continue b}if(32&amp;w){c.mode=e;break a}a.msg=&quot;invalid literal/length code&quot;,c.mode=d;break a}x=65535&amp;v,w&amp;=15,w&amp;&amp;(q&lt;w&amp;&amp;(p+=B[f++]&lt;&lt;q,q+=8),x+=p&amp;(1&lt;&lt;w)-1,p&gt;&gt;&gt;=w,q-=w),q&lt;15&amp;&amp;(p+=B[f++]&lt;&lt;q,q+=8,p+=B[f++]&lt;&lt;q,q+=8),v=s[p&amp;u];c:for(;;){if(w=v&gt;&gt;&gt;24,p&gt;&gt;&gt;=w,q-=w,w=v&gt;&gt;&gt;16&amp;255,!(16&amp;w)){if(0===(64&amp;w)){v=s[(65535&amp;v)+(p&amp;(1&lt;&lt;w)-1)];continue c}a.msg=&quot;invalid distance code&quot;,c.mode=d;break a}if(y=65535&amp;v,w&amp;=15,q&lt;w&amp;&amp;(p+=B[f++]&lt;&lt;q,q+=8,q&lt;w&amp;&amp;(p+=B[f++]&lt;&lt;q,q+=8)),y+=p&amp;(1&lt;&lt;w)-1,y&gt;k){a.msg=&quot;invalid distance too far back&quot;,c.mode=d;break a}if(p&gt;&gt;&gt;=w,q-=w,w=h-i,y&gt;w){if(w=y-w,w&gt;m&amp;&amp;c.sane){a.msg=&quot;invalid distance too far back&quot;,c.mode=d;break a}if(z=0,A=o,0===n){if(z+=l-w,w&lt;x){x-=w;do C[h++]=o[z++];while(--w);z=h-y,A=C}}else if(n&lt;w){if(z+=l+n-w,w-=n,w&lt;x){x-=w;do C[h++]=o[z++];while(--w);if(z=0,n&lt;x){w=n,x-=w;do C[h++]=o[z++];while(--w);z=h-y,A=C}}}else if(z+=n-w,w&lt;x){x-=w;do C[h++]=o[z++];while(--w);z=h-y,A=C}for(;x&gt;2;)C[h++]=A[z++],C[h++]=A[z++],C[h++]=A[z++],x-=3;x&amp;&amp;(C[h++]=A[z++],x&gt;1&amp;&amp;(C[h++]=A[z++]))}else{z=h-y;do C[h++]=C[z++],C[h++]=C[z++],C[h++]=C[z++],x-=3;while(x&gt;2);x&amp;&amp;(C[h++]=C[z++],x&gt;1&amp;&amp;(C[h++]=C[z++]))}break}}break}}while(f&lt;g&amp;&amp;h&lt;j);x=q&gt;&gt;3,f-=x,q-=x&lt;&lt;3,p&amp;=(1&lt;&lt;q)-1,a.next_in=f,a.next_out=h,a.avail_in=f&lt;g?5+(g-f):5-(f-g),a.avail_out=h&lt;j?257+(j-h):257-(h-j),c.hold=p,c.bits=q}},{}],36:[function(a,b,c){&quot;use strict&quot;;function d(a){return(a&gt;&gt;&gt;24&amp;255)+(a&gt;&gt;&gt;8&amp;65280)+((65280&amp;a)&lt;&lt;8)+((255&amp;a)&lt;&lt;24)}function e(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new s.Buf16(320),this.work=new s.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function f(a){var b;return a&amp;&amp;a.state?(b=a.state,a.total_in=a.total_out=b.total=0,a.msg=&quot;&quot;,b.wrap&amp;&amp;(a.adler=1&amp;b.wrap),b.mode=L,b.last=0,b.havedict=0,b.dmax=32768,b.head=null,b.hold=0,b.bits=0,b.lencode=b.lendyn=new s.Buf32(pa),b.distcode=b.distdyn=new s.Buf32(qa),b.sane=1,b.back=-1,D):G}function g(a){var b;return a&amp;&amp;a.state?(b=a.state,b.wsize=0,b.whave=0,b.wnext=0,f(a)):G}function h(a,b){var c,d;return a&amp;&amp;a.state?(d=a.state,b&lt;0?(c=0,b=-b):(c=(b&gt;&gt;4)+1,b&lt;48&amp;&amp;(b&amp;=15)),b&amp;&amp;(b&lt;8||b&gt;15)?G:(null!==d.window&amp;&amp;d.wbits!==b&amp;&amp;(d.window=null),d.wrap=c,d.wbits=b,g(a))):G}function i(a,b){var c,d;return a?(d=new e,a.state=d,d.window=null,c=h(a,b),c!==D&amp;&amp;(a.state=null),c):G}function j(a){return i(a,sa)}function k(a){if(ta){var b;for(q=new s.Buf32(512),r=new s.Buf32(32),b=0;b&lt;144;)a.lens[b++]=8;for(;b&lt;256;)a.lens[b++]=9;for(;b&lt;280;)a.lens[b++]=7;for(;b&lt;288;)a.lens[b++]=8;for(w(y,a.lens,0,288,q,0,a.work,{bits:9}),b=0;b&lt;32;)a.lens[b++]=5;w(z,a.lens,0,32,r,0,a.work,{bits:5}),ta=!1}a.lencode=q,a.lenbits=9,a.distcode=r,a.distbits=5}function l(a,b,c,d){var e,f=a.state;return null===f.window&amp;&amp;(f.wsize=1&lt;&lt;f.wbits,f.wnext=0,f.whave=0,f.window=new s.Buf8(f.wsize)),d&gt;=f.wsize?(s.arraySet(f.window,b,c-f.wsize,f.wsize,0),f.wnext=0,f.whave=f.wsize):(e=f.wsize-f.wnext,e&gt;d&amp;&amp;(e=d),s.arraySet(f.window,b,c-d,e,f.wnext),d-=e,d?(s.arraySet(f.window,b,c-d,d,0),f.wnext=d,f.whave=f.wsize):(f.wnext+=e,f.wnext===f.wsize&amp;&amp;(f.wnext=0),f.whave&lt;f.wsize&amp;&amp;(f.whave+=e))),0}function m(a,b){var c,e,f,g,h,i,j,m,n,o,p,q,r,pa,qa,ra,sa,ta,ua,va,wa,xa,ya,za,Aa=0,Ba=new s.Buf8(4),Ca=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!a||!a.state||!a.output||!a.input&amp;&amp;0!==a.avail_in)return G;c=a.state,c.mode===W&amp;&amp;(c.mode=X),h=a.next_out,f=a.output,j=a.avail_out,g=a.next_in,e=a.input,i=a.avail_in,m=c.hold,n=c.bits,o=i,p=j,xa=D;a:for(;;)switch(c.mode){case L:if(0===c.wrap){c.mode=X;break}for(;n&lt;16;){if(0===i)break a;i--,m+=e[g++]&lt;&lt;n,n+=8}if(2&amp;c.wrap&amp;&amp;35615===m){c.check=0,Ba[0]=255&amp;m,Ba[1]=m&gt;&gt;&gt;8&amp;255,c.check=u(c.check,Ba,2,0),m=0,n=0,c.mode=M;break}if(c.flags=0,c.head&amp;&amp;(c.head.done=!1),!(1&amp;c.wrap)||(((255&amp;m)&lt;&lt;8)+(m&gt;&gt;8))%31){a.msg=&quot;incorrect header check&quot;,c.mode=ma;break}if((15&amp;m)!==K){a.msg=&quot;unknown compression method&quot;,c.mode=ma;break}if(m&gt;&gt;&gt;=4,n-=4,wa=(15&amp;m)+8,0===c.wbits)c.wbits=wa;else if(wa&gt;c.wbits){a.msg=&quot;invalid window size&quot;,c.mode=ma;break}c.dmax=1&lt;&lt;wa,a.adler=c.check=1,c.mode=512&amp;m?U:W,m=0,n=0;break;case M:for(;n&lt;16;){if(0===i)break a;i--,m+=e[g++]&lt;&lt;n,n+=8}if(c.flags=m,(255&amp;c.flags)!==K){a.msg=&quot;unknown compression method&quot;,c.mode=ma;break}if(57344&amp;c.flags){a.msg=&quot;unknown header flags set&quot;,c.mode=ma;break}c.head&amp;&amp;(c.head.text=m&gt;&gt;8&amp;1),512&amp;c.flags&amp;&amp;(Ba[0]=255&amp;m,Ba[1]=m&gt;&gt;&gt;8&amp;255,c.check=u(c.check,Ba,2,0)),m=0,n=0,c.mode=N;case N:for(;n&lt;32;){if(0===i)break a;i--,m+=e[g++]&lt;&lt;n,n+=8}c.head&amp;&amp;(c.head.time=m),512&amp;c.flags&amp;&amp;(Ba[0]=255&amp;m,Ba[1]=m&gt;&gt;&gt;8&amp;255,Ba[2]=m&gt;&gt;&gt;16&amp;255,Ba[3]=m&gt;&gt;&gt;24&amp;255,c.check=u(c.check,Ba,4,0)),m=0,n=0,c.mode=O;case O:for(;n&lt;16;){if(0===i)break a;i--,m+=e[g++]&lt;&lt;n,</td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code blob-code-inner js-file-line">n+=8}c.head&amp;&amp;(c.head.xflags=255&amp;m,c.head.os=m&gt;&gt;8),512&amp;c.flags&amp;&amp;(Ba[0]=255&amp;m,Ba[1]=m&gt;&gt;&gt;8&amp;255,c.check=u(c.check,Ba,2,0)),m=0,n=0,c.mode=P;case P:if(1024&amp;c.flags){for(;n&lt;16;){if(0===i)break a;i--,m+=e[g++]&lt;&lt;n,n+=8}c.length=m,c.head&amp;&amp;(c.head.extra_len=m),512&amp;c.flags&amp;&amp;(Ba[0]=255&amp;m,Ba[1]=m&gt;&gt;&gt;8&amp;255,c.check=u(c.check,Ba,2,0)),m=0,n=0}else c.head&amp;&amp;(c.head.extra=null);c.mode=Q;case Q:if(1024&amp;c.flags&amp;&amp;(q=c.length,q&gt;i&amp;&amp;(q=i),q&amp;&amp;(c.head&amp;&amp;(wa=c.head.extra_len-c.length,c.head.extra||(c.head.extra=new Array(c.head.extra_len)),s.arraySet(c.head.extra,e,g,q,wa)),512&amp;c.flags&amp;&amp;(c.check=u(c.check,e,q,g)),i-=q,g+=q,c.length-=q),c.length))break a;c.length=0,c.mode=R;case R:if(2048&amp;c.flags){if(0===i)break a;q=0;do wa=e[g+q++],c.head&amp;&amp;wa&amp;&amp;c.length&lt;65536&amp;&amp;(c.head.name+=String.fromCharCode(wa));while(wa&amp;&amp;q&lt;i);if(512&amp;c.flags&amp;&amp;(c.check=u(c.check,e,q,g)),i-=q,g+=q,wa)break a}else c.head&amp;&amp;(c.head.name=null);c.length=0,c.mode=S;case S:if(4096&amp;c.flags){if(0===i)break a;q=0;do wa=e[g+q++],c.head&amp;&amp;wa&amp;&amp;c.length&lt;65536&amp;&amp;(c.head.comment+=String.fromCharCode(wa));while(wa&amp;&amp;q&lt;i);if(512&amp;c.flags&amp;&amp;(c.check=u(c.check,e,q,g)),i-=q,g+=q,wa)break a}else c.head&amp;&amp;(c.head.comment=null);c.mode=T;case T:if(512&amp;c.flags){for(;n&lt;16;){if(0===i)break a;i--,m+=e[g++]&lt;&lt;n,n+=8}if(m!==(65535&amp;c.check)){a.msg=&quot;header crc mismatch&quot;,c.mode=ma;break}m=0,n=0}c.head&amp;&amp;(c.head.hcrc=c.flags&gt;&gt;9&amp;1,c.head.done=!0),a.adler=c.check=0,c.mode=W;break;case U:for(;n&lt;32;){if(0===i)break a;i--,m+=e[g++]&lt;&lt;n,n+=8}a.adler=c.check=d(m),m=0,n=0,c.mode=V;case V:if(0===c.havedict)return a.next_out=h,a.avail_out=j,a.next_in=g,a.avail_in=i,c.hold=m,c.bits=n,F;a.adler=c.check=1,c.mode=W;case W:if(b===B||b===C)break a;case X:if(c.last){m&gt;&gt;&gt;=7&amp;n,n-=7&amp;n,c.mode=ja;break}for(;n&lt;3;){if(0===i)break a;i--,m+=e[g++]&lt;&lt;n,n+=8}switch(c.last=1&amp;m,m&gt;&gt;&gt;=1,n-=1,3&amp;m){case 0:c.mode=Y;break;case 1:if(k(c),c.mode=ca,b===C){m&gt;&gt;&gt;=2,n-=2;break a}break;case 2:c.mode=_;break;case 3:a.msg=&quot;invalid block type&quot;,c.mode=ma}m&gt;&gt;&gt;=2,n-=2;break;case Y:for(m&gt;&gt;&gt;=7&amp;n,n-=7&amp;n;n&lt;32;){if(0===i)break a;i--,m+=e[g++]&lt;&lt;n,n+=8}if((65535&amp;m)!==(m&gt;&gt;&gt;16^65535)){a.msg=&quot;invalid stored block lengths&quot;,c.mode=ma;break}if(c.length=65535&amp;m,m=0,n=0,c.mode=Z,b===C)break a;case Z:c.mode=$;case $:if(q=c.length){if(q&gt;i&amp;&amp;(q=i),q&gt;j&amp;&amp;(q=j),0===q)break a;s.arraySet(f,e,g,q,h),i-=q,g+=q,j-=q,h+=q,c.length-=q;break}c.mode=W;break;case _:for(;n&lt;14;){if(0===i)break a;i--,m+=e[g++]&lt;&lt;n,n+=8}if(c.nlen=(31&amp;m)+257,m&gt;&gt;&gt;=5,n-=5,c.ndist=(31&amp;m)+1,m&gt;&gt;&gt;=5,n-=5,c.ncode=(15&amp;m)+4,m&gt;&gt;&gt;=4,n-=4,c.nlen&gt;286||c.ndist&gt;30){a.msg=&quot;too many length or distance symbols&quot;,c.mode=ma;break}c.have=0,c.mode=aa;case aa:for(;c.have&lt;c.ncode;){for(;n&lt;3;){if(0===i)break a;i--,m+=e[g++]&lt;&lt;n,n+=8}c.lens[Ca[c.have++]]=7&amp;m,m&gt;&gt;&gt;=3,n-=3}for(;c.have&lt;19;)c.lens[Ca[c.have++]]=0;if(c.lencode=c.lendyn,c.lenbits=7,ya={bits:c.lenbits},xa=w(x,c.lens,0,19,c.lencode,0,c.work,ya),c.lenbits=ya.bits,xa){a.msg=&quot;invalid code lengths set&quot;,c.mode=ma;break}c.have=0,c.mode=ba;case ba:for(;c.have&lt;c.nlen+c.ndist;){for(;Aa=c.lencode[m&amp;(1&lt;&lt;c.lenbits)-1],qa=Aa&gt;&gt;&gt;24,ra=Aa&gt;&gt;&gt;16&amp;255,sa=65535&amp;Aa,!(qa&lt;=n);){if(0===i)break a;i--,m+=e[g++]&lt;&lt;n,n+=8}if(sa&lt;16)m&gt;&gt;&gt;=qa,n-=qa,c.lens[c.have++]=sa;else{if(16===sa){for(za=qa+2;n&lt;za;){if(0===i)break a;i--,m+=e[g++]&lt;&lt;n,n+=8}if(m&gt;&gt;&gt;=qa,n-=qa,0===c.have){a.msg=&quot;invalid bit length repeat&quot;,c.mode=ma;break}wa=c.lens[c.have-1],q=3+(3&amp;m),m&gt;&gt;&gt;=2,n-=2}else if(17===sa){for(za=qa+3;n&lt;za;){if(0===i)break a;i--,m+=e[g++]&lt;&lt;n,n+=8}m&gt;&gt;&gt;=qa,n-=qa,wa=0,q=3+(7&amp;m),m&gt;&gt;&gt;=3,n-=3}else{for(za=qa+7;n&lt;za;){if(0===i)break a;i--,m+=e[g++]&lt;&lt;n,n+=8}m&gt;&gt;&gt;=qa,n-=qa,wa=0,q=11+(127&amp;m),m&gt;&gt;&gt;=7,n-=7}if(c.have+q&gt;c.nlen+c.ndist){a.msg=&quot;invalid bit length repeat&quot;,c.mode=ma;break}for(;q--;)c.lens[c.have++]=wa}}if(c.mode===ma)break;if(0===c.lens[256]){a.msg=&quot;invalid code -- missing end-of-block&quot;,c.mode=ma;break}if(c.lenbits=9,ya={bits:c.lenbits},xa=w(y,c.lens,0,c.nlen,c.lencode,0,c.work,ya),c.lenbits=ya.bits,xa){a.msg=&quot;invalid literal/lengths set&quot;,c.mode=ma;break}if(c.distbits=6,c.distcode=c.distdyn,ya={bits:c.distbits},xa=w(z,c.lens,c.nlen,c.ndist,c.distcode,0,c.work,ya),c.distbits=ya.bits,xa){a.msg=&quot;invalid distances set&quot;,c.mode=ma;break}if(c.mode=ca,b===C)break a;case ca:c.mode=da;case da:if(i&gt;=6&amp;&amp;j&gt;=258){a.next_out=h,a.avail_out=j,a.next_in=g,a.avail_in=i,c.hold=m,c.bits=n,v(a,p),h=a.next_out,f=a.output,j=a.avail_out,g=a.next_in,e=a.input,i=a.avail_in,m=c.hold,n=c.bits,c.mode===W&amp;&amp;(c.back=-1);break}for(c.back=0;Aa=c.lencode[m&amp;(1&lt;&lt;c.lenbits)-1],qa=Aa&gt;&gt;&gt;24,ra=Aa&gt;&gt;&gt;16&amp;255,sa=65535&amp;Aa,!(qa&lt;=n);){if(0===i)break a;i--,m+=e[g++]&lt;&lt;n,n+=8}if(ra&amp;&amp;0===(240&amp;ra)){for(ta=qa,ua=ra,va=sa;Aa=c.lencode[va+((m&amp;(1&lt;&lt;ta+ua)-1)&gt;&gt;ta)],qa=Aa&gt;&gt;&gt;24,ra=Aa&gt;&gt;&gt;16&amp;255,sa=65535&amp;Aa,!(ta+qa&lt;=n);){if(0===i)break a;i--,m+=e[g++]&lt;&lt;n,n+=8}m&gt;&gt;&gt;=ta,n-=ta,c.back+=ta}if(m&gt;&gt;&gt;=qa,n-=qa,c.back+=qa,c.length=sa,0===ra){c.mode=ia;break}if(32&amp;ra){c.back=-1,c.mode=W;break}if(64&amp;ra){a.msg=&quot;invalid literal/length code&quot;,c.mode=ma;break}c.extra=15&amp;ra,c.mode=ea;case ea:if(c.extra){for(za=c.extra;n&lt;za;){if(0===i)break a;i--,m+=e[g++]&lt;&lt;n,n+=8}c.length+=m&amp;(1&lt;&lt;c.extra)-1,m&gt;&gt;&gt;=c.extra,n-=c.extra,c.back+=c.extra}c.was=c.length,c.mode=fa;case fa:for(;Aa=c.distcode[m&amp;(1&lt;&lt;c.distbits)-1],qa=Aa&gt;&gt;&gt;24,ra=Aa&gt;&gt;&gt;16&amp;255,sa=65535&amp;Aa,!(qa&lt;=n);){if(0===i)break a;i--,m+=e[g++]&lt;&lt;n,n+=8}if(0===(240&amp;ra)){for(ta=qa,ua=ra,va=sa;Aa=c.distcode[va+((m&amp;(1&lt;&lt;ta+ua)-1)&gt;&gt;ta)],qa=Aa&gt;&gt;&gt;24,ra=Aa&gt;&gt;&gt;16&amp;255,sa=65535&amp;Aa,!(ta+qa&lt;=n);){if(0===i)break a;i--,m+=e[g++]&lt;&lt;n,n+=8}m&gt;&gt;&gt;=ta,n-=ta,c.back+=ta}if(m&gt;&gt;&gt;=qa,n-=qa,c.back+=qa,64&amp;ra){a.msg=&quot;invalid distance code&quot;,c.mode=ma;break}c.offset=sa,c.extra=15&amp;ra,c.mode=ga;case ga:if(c.extra){for(za=c.extra;n&lt;za;){if(0===i)break a;i--,m+=e[g++]&lt;&lt;n,n+=8}c.offset+=m&amp;(1&lt;&lt;c.extra)-1,m&gt;&gt;&gt;=c.extra,n-=c.extra,c.back+=c.extra}if(c.offset&gt;c.dmax){a.msg=&quot;invalid distance too far back&quot;,c.mode=ma;break}c.mode=ha;case ha:if(0===j)break a;if(q=p-j,c.offset&gt;q){if(q=c.offset-q,q&gt;c.whave&amp;&amp;c.sane){a.msg=&quot;invalid distance too far back&quot;,c.mode=ma;break}q&gt;c.wnext?(q-=c.wnext,r=c.wsize-q):r=c.wnext-q,q&gt;c.length&amp;&amp;(q=c.length),pa=c.window}else pa=f,r=h-c.offset,q=c.length;q&gt;j&amp;&amp;(q=j),j-=q,c.length-=q;do f[h++]=pa[r++];while(--q);0===c.length&amp;&amp;(c.mode=da);break;case ia:if(0===j)break a;f[h++]=c.length,j--,c.mode=da;break;case ja:if(c.wrap){for(;n&lt;32;){if(0===i)break a;i--,m|=e[g++]&lt;&lt;n,n+=8}if(p-=j,a.total_out+=p,c.total+=p,p&amp;&amp;(a.adler=c.check=c.flags?u(c.check,f,p,h-p):t(c.check,f,p,h-p)),p=j,(c.flags?m:d(m))!==c.check){a.msg=&quot;incorrect data check&quot;,c.mode=ma;break}m=0,n=0}c.mode=ka;case ka:if(c.wrap&amp;&amp;c.flags){for(;n&lt;32;){if(0===i)break a;i--,m+=e[g++]&lt;&lt;n,n+=8}if(m!==(4294967295&amp;c.total)){a.msg=&quot;incorrect length check&quot;,c.mode=ma;break}m=0,n=0}c.mode=la;case la:xa=E;break a;case ma:xa=H;break a;case na:return I;case oa:default:return G}return a.next_out=h,a.avail_out=j,a.next_in=g,a.avail_in=i,c.hold=m,c.bits=n,(c.wsize||p!==a.avail_out&amp;&amp;c.mode&lt;ma&amp;&amp;(c.mode&lt;ja||b!==A))&amp;&amp;l(a,a.output,a.next_out,p-a.avail_out)?(c.mode=na,I):(o-=a.avail_in,p-=a.avail_out,a.total_in+=o,a.total_out+=p,c.total+=p,c.wrap&amp;&amp;p&amp;&amp;(a.adler=c.check=c.flags?u(c.check,f,p,a.next_out-p):t(c.check,f,p,a.next_out-p)),a.data_type=c.bits+(c.last?64:0)+(c.mode===W?128:0)+(c.mode===ca||c.mode===Z?256:0),(0===o&amp;&amp;0===p||b===A)&amp;&amp;xa===D&amp;&amp;(xa=J),xa)}function n(a){if(!a||!a.state)return G;var b=a.state;return b.window&amp;&amp;(b.window=null),a.state=null,D}function o(a,b){var c;return a&amp;&amp;a.state?(c=a.state,0===(2&amp;c.wrap)?G:(c.head=b,b.done=!1,D)):G}function p(a,b){var c,d,e,f=b.length;return a&amp;&amp;a.state?(c=a.state,0!==c.wrap&amp;&amp;c.mode!==V?G:c.mode===V&amp;&amp;(d=1,d=t(d,b,f,0),d!==c.check)?H:(e=l(a,b,f,f))?(c.mode=na,I):(c.havedict=1,D)):G}var q,r,s=a(&quot;../utils/common&quot;),t=a(&quot;./adler32&quot;),u=a(&quot;./crc32&quot;),v=a(&quot;./inffast&quot;),w=a(&quot;./inftrees&quot;),x=0,y=1,z=2,A=4,B=5,C=6,D=0,E=1,F=2,G=-2,H=-3,I=-4,J=-5,K=8,L=1,M=2,N=3,O=4,P=5,Q=6,R=7,S=8,T=9,U=10,V=11,W=12,X=13,Y=14,Z=15,$=16,_=17,aa=18,ba=19,ca=20,da=21,ea=22,fa=23,ga=24,ha=25,ia=26,ja=27,ka=28,la=29,ma=30,na=31,oa=32,pa=852,qa=592,ra=15,sa=ra,ta=!0;c.inflateReset=g,c.inflateReset2=h,c.inflateResetKeep=f,c.inflateInit=j,c.inflateInit2=i,c.inflate=m,c.inflateEnd=n,c.inflateGetHeader=o,c.inflateSetDictionary=p,c.inflateInfo=&quot;pako inflate (from Nodeca project)&quot;},{&quot;../utils/common&quot;:28,&quot;./adler32&quot;:30,&quot;./crc32&quot;:32,&quot;./inffast&quot;:35,&quot;./inftrees&quot;:37}],37:[function(a,b,c){&quot;use strict&quot;;var d=a(&quot;../utils/common&quot;),e=15,f=852,g=592,h=0,i=1,j=2,k=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],l=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],m=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],n=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];b.exports=function(a,b,c,o,p,q,r,s){var t,u,v,w,x,y,z,A,B,C=s.bits,D=0,E=0,F=0,G=0,H=0,I=0,J=0,K=0,L=0,M=0,N=null,O=0,P=new d.Buf16(e+1),Q=new d.Buf16(e+1),R=null,S=0;for(D=0;D&lt;=e;D++)P[D]=0;for(E=0;E&lt;o;E++)P[b[c+E]]++;for(H=C,G=e;G&gt;=1&amp;&amp;0===P[G];G--);if(H&gt;G&amp;&amp;(H=G),0===G)return p[q++]=20971520,p[q++]=20971520,s.bits=1,0;for(F=1;F&lt;G&amp;&amp;0===P[F];F++);for(H&lt;F&amp;&amp;(H=F),K=1,D=1;D&lt;=e;D++)if(K&lt;&lt;=1,K-=P[D],K&lt;0)return-1;if(K&gt;0&amp;&amp;(a===h||1!==G))return-1;for(Q[1]=0,D=1;D&lt;e;D++)Q[D+1]=Q[D]+P[D];for(E=0;E&lt;o;E++)0!==b[c+E]&amp;&amp;(r[Q[b[c+E]]++]=E);if(a===h?(N=R=r,y=19):a===i?(N=k,O-=257,R=l,S-=257,y=256):(N=m,R=n,y=-1),M=0,E=0,D=F,x=q,I=H,J=0,v=-1,L=1&lt;&lt;H,w=L-1,a===i&amp;&amp;L&gt;f||a===j&amp;&amp;L&gt;g)return 1;for(var T=0;;){T++,z=D-J,r[E]&lt;y?(A=0,B=r[E]):r[E]&gt;y?(A=R[S+r[E]],B=N[O+r[E]]):(A=96,B=0),t=1&lt;&lt;D-J,u=1&lt;&lt;I,F=u;do u-=t,p[x+(M&gt;&gt;J)+u]=z&lt;&lt;24|A&lt;&lt;16|B|0;while(0!==u);for(t=1&lt;&lt;D-1;M&amp;t;)t&gt;&gt;=1;if(0!==t?(M&amp;=t-1,M+=t):M=0,E++,0===--P[D]){if(D===G)break;D=b[c+r[E]]}if(D&gt;H&amp;&amp;(M&amp;w)!==v){for(0===J&amp;&amp;(J=H),x+=F,I=D-J,K=1&lt;&lt;I;I+J&lt;G&amp;&amp;(K-=P[I+J],!(K&lt;=0));)I++,K&lt;&lt;=1;if(L+=1&lt;&lt;I,a===i&amp;&amp;L&gt;f||a===j&amp;&amp;L&gt;g)return 1;v=M&amp;w,p[v]=H&lt;&lt;24|I&lt;&lt;16|x-q|0}}return 0!==M&amp;&amp;(p[x+M]=D-J&lt;&lt;24|64&lt;&lt;16|0),s.bits=H,0}},{&quot;../utils/common&quot;:28}],38:[function(a,b,c){&quot;use strict&quot;;b.exports={2:&quot;need dictionary&quot;,1:&quot;stream end&quot;,0:&quot;&quot;,&quot;-1&quot;:&quot;file error&quot;,&quot;-2&quot;:&quot;stream error&quot;,&quot;-3&quot;:&quot;data error&quot;,&quot;-4&quot;:&quot;insufficient memory&quot;,&quot;-5&quot;:&quot;buffer error&quot;,&quot;-6&quot;:&quot;incompatible version&quot;}},{}],39:[function(a,b,c){&quot;use strict&quot;;function d(a){for(var b=a.length;--b&gt;=0;)a[b]=0}function e(a,b,c,d,e){this.static_tree=a,this.extra_bits=b,this.extra_base=c,this.elems=d,this.max_length=e,this.has_stree=a&amp;&amp;a.length}function f(a,b){this.dyn_tree=a,this.max_code=0,this.stat_desc=b}function g(a){return a&lt;256?ia[a]:ia[256+(a&gt;&gt;&gt;7)]}function h(a,b){a.pending_buf[a.pending++]=255&amp;b,a.pending_buf[a.pending++]=b&gt;&gt;&gt;8&amp;255}function i(a,b,c){a.bi_valid&gt;X-c?(a.bi_buf|=b&lt;&lt;a.bi_valid&amp;65535,h(a,a.bi_buf),a.bi_buf=b&gt;&gt;X-a.bi_valid,a.bi_valid+=c-X):(a.bi_buf|=b&lt;&lt;a.bi_valid&amp;65535,a.bi_valid+=c)}function j(a,b,c){i(a,c[2*b],c[2*b+1])}function k(a,b){var c=0;do c|=1&amp;a,a&gt;&gt;&gt;=1,c&lt;&lt;=1;while(--b&gt;0);return c&gt;&gt;&gt;1}function l(a){16===a.bi_valid?(h(a,a.bi_buf),a.bi_buf=0,a.bi_valid=0):a.bi_valid&gt;=8&amp;&amp;(a.pending_buf[a.pending++]=255&amp;a.bi_buf,a.bi_buf&gt;&gt;=8,a.bi_valid-=8)}function m(a,b){var c,d,e,f,g,h,i=b.dyn_tree,j=b.max_code,k=b.stat_desc.static_tree,l=b.stat_desc.has_stree,m=b.stat_desc.extra_bits,n=b.stat_desc.extra_base,o=b.stat_desc.max_length,p=0;for(f=0;f&lt;=W;f++)a.bl_count[f]=0;for(i[2*a.heap[a.heap_max]+1]=0,c=a.heap_max+1;c&lt;V;c++)d=a.heap[c],f=i[2*i[2*d+1]+1]+1,f&gt;o&amp;&amp;(f=o,p++),i[2*d+1]=f,d&gt;j||(a.bl_count[f]++,g=0,d&gt;=n&amp;&amp;(g=m[d-n]),h=i[2*d],a.opt_len+=h*(f+g),l&amp;&amp;(a.static_len+=h*(k[2*d+1]+g)));if(0!==p){do{for(f=o-1;0===a.bl_count[f];)f--;a.bl_count[f]--,a.bl_count[f+1]+=2,a.bl_count[o]--,p-=2}while(p&gt;0);for(f=o;0!==f;f--)for(d=a.bl_count[f];0!==d;)e=a.heap[--c],e&gt;j||(i[2*e+1]!==f&amp;&amp;(a.opt_len+=(f-i[2*e+1])*i[2*e],i[2*e+1]=f),d--)}}function n(a,b,c){var d,e,f=new Array(W+1),g=0;for(d=1;d&lt;=W;d++)f[d]=g=g+c[d-1]&lt;&lt;1;for(e=0;e&lt;=b;e++){var h=a[2*e+1];0!==h&amp;&amp;(a[2*e]=k(f[h]++,h))}}function o(){var a,b,c,d,f,g=new Array(W+1);for(c=0,d=0;d&lt;Q-1;d++)for(ka[d]=c,a=0;a&lt;1&lt;&lt;ba[d];a++)ja[c++]=d;for(ja[c-1]=d,f=0,d=0;d&lt;16;d++)for(la[d]=f,a=0;a&lt;1&lt;&lt;ca[d];a++)ia[f++]=d;for(f&gt;&gt;=7;d&lt;T;d++)for(la[d]=f&lt;&lt;7,a=0;a&lt;1&lt;&lt;ca[d]-7;a++)ia[256+f++]=d;for(b=0;b&lt;=W;b++)g[b]=0;for(a=0;a&lt;=143;)ga[2*a+1]=8,a++,g[8]++;for(;a&lt;=255;)ga[2*a+1]=9,a++,g[9]++;for(;a&lt;=279;)ga[2*a+1]=7,a++,g[7]++;for(;a&lt;=287;)ga[2*a+1]=8,a++,g[8]++;for(n(ga,S+1,g),a=0;a&lt;T;a++)ha[2*a+1]=5,ha[2*a]=k(a,5);ma=new e(ga,ba,R+1,S,W),na=new e(ha,ca,0,T,W),oa=new e(new Array(0),da,0,U,Y)}function p(a){var b;for(b=0;b&lt;S;b++)a.dyn_ltree[2*b]=0;for(b=0;b&lt;T;b++)a.dyn_dtree[2*b]=0;for(b=0;b&lt;U;b++)a.bl_tree[2*b]=0;a.dyn_ltree[2*Z]=1,a.opt_len=a.static_len=0,a.last_lit=a.matches=0}function q(a){a.bi_valid&gt;8?h(a,a.bi_buf):a.bi_valid&gt;0&amp;&amp;(a.pending_buf[a.pending++]=a.bi_buf),a.bi_buf=0,a.bi_valid=0}function r(a,b,c,d){q(a),d&amp;&amp;(h(a,c),h(a,~c)),G.arraySet(a.pending_buf,a.window,b,c,a.pending),a.pending+=c}function s(a,b,c,d){var e=2*b,f=2*c;return a[e]&lt;a[f]||a[e]===a[f]&amp;&amp;d[b]&lt;=d[c]}function t(a,b,c){for(var d=a.heap[c],e=c&lt;&lt;1;e&lt;=a.heap_len&amp;&amp;(e&lt;a.heap_len&amp;&amp;s(b,a.heap[e+1],a.heap[e],a.depth)&amp;&amp;e++,!s(b,d,a.heap[e],a.depth));)a.heap[c]=a.heap[e],c=e,e&lt;&lt;=1;a.heap[c]=d}function u(a,b,c){var d,e,f,h,k=0;if(0!==a.last_lit)do d=a.pending_buf[a.d_buf+2*k]&lt;&lt;8|a.pending_buf[a.d_buf+2*k+1],e=a.pending_buf[a.l_buf+k],k++,0===d?j(a,e,b):(f=ja[e],j(a,f+R+1,b),h=ba[f],0!==h&amp;&amp;(e-=ka[f],i(a,e,h)),d--,f=g(d),j(a,f,c),h=ca[f],0!==h&amp;&amp;(d-=la[f],i(a,d,h)));while(k&lt;a.last_lit);j(a,Z,b)}function v(a,b){var c,d,e,f=b.dyn_tree,g=b.stat_desc.static_tree,h=b.stat_desc.has_stree,i=b.stat_desc.elems,j=-1;for(a.heap_len=0,a.heap_max=V,c=0;c&lt;i;c++)0!==f[2*c]?(a.heap[++a.heap_len]=j=c,a.depth[c]=0):f[2*c+1]=0;for(;a.heap_len&lt;2;)e=a.heap[++a.heap_len]=j&lt;2?++j:0,f[2*e]=1,a.depth[e]=0,a.opt_len--,h&amp;&amp;(a.static_len-=g[2*e+1]);for(b.max_code=j,c=a.heap_len&gt;&gt;1;c&gt;=1;c--)t(a,f,c);e=i;do c=a.heap[1],a.heap[1]=a.heap[a.heap_len--],t(a,f,1),d=a.heap[1],a.heap[--a.heap_max]=c,a.heap[--a.heap_max]=d,f[2*e]=f[2*c]+f[2*d],a.depth[e]=(a.depth[c]&gt;=a.depth[d]?a.depth[c]:a.depth[d])+1,f[2*c+1]=f[2*d+1]=e,a.heap[1]=e++,t(a,f,1);while(a.heap_len&gt;=2);a.heap[--a.heap_max]=a.heap[1],m(a,b),n(f,j,a.bl_count)}function w(a,b,c){var d,e,f=-1,g=b[1],h=0,i=7,j=4;for(0===g&amp;&amp;(i=138,j=3),b[2*(c+1)+1]=65535,d=0;d&lt;=c;d++)e=g,g=b[2*(d+1)+1],++h&lt;i&amp;&amp;e===g||(h&lt;j?a.bl_tree[2*e]+=h:0!==e?(e!==f&amp;&amp;a.bl_tree[2*e]++,a.bl_tree[2*$]++):h&lt;=10?a.bl_tree[2*_]++:a.bl_tree[2*aa]++,h=0,f=e,0===g?(i=138,j=3):e===g?(i=6,j=3):(i=7,j=4))}function x(a,b,c){var d,e,f=-1,g=b[1],h=0,k=7,l=4;for(0===g&amp;&amp;(k=138,l=3),d=0;d&lt;=c;d++)if(e=g,g=b[2*(d+1)+1],!(++h&lt;k&amp;&amp;e===g)){if(h&lt;l){do j(a,e,a.bl_tree);while(0!==--h)}else 0!==e?(e!==f&amp;&amp;(j(a,e,a.bl_tree),h--),j(a,$,a.bl_tree),i(a,h-3,2)):h&lt;=10?(j(a,_,a.bl_tree),i(a,h-3,3)):(j(a,aa,a.bl_tree),i(a,h-11,7));h=0,f=e,0===g?(k=138,l=3):e===g?(k=6,l=3):(k=7,l=4)}}function y(a){var b;for(w(a,a.dyn_ltree,a.l_desc.max_code),w(a,a.dyn_dtree,a.d_desc.max_code),v(a,a.bl_desc),b=U-1;b&gt;=3&amp;&amp;0===a.bl_tree[2*ea[b]+1];b--);return a.opt_len+=3*(b+1)+5+5+4,b}function z(a,b,c,d){var e;for(i(a,b-257,5),i(a,c-1,5),i(a,d-4,4),e=0;e&lt;d;e++)i(a,a.bl_tree[2*ea[e]+1],3);x(a,a.dyn_ltree,b-1),x(a,a.dyn_dtree,c-1)}function A(a){var b,c=4093624447;for(b=0;b&lt;=31;b++,c&gt;&gt;&gt;=1)if(1&amp;c&amp;&amp;0!==a.dyn_ltree[2*b])return I;if(0!==a.dyn_ltree[18]||0!==a.dyn_ltree[20]||0!==a.dyn_ltree[26])return J;for(b=32;b&lt;R;b++)if(0!==a.dyn_ltree[2*b])return J;return I}function B(a){pa||(o(),pa=!0),a.l_desc=new f(a.dyn_ltree,ma),a.d_desc=new f(a.dyn_dtree,na),a.bl_desc=new f(a.bl_tree,oa),a.bi_buf=0,a.bi_valid=0,p(a)}function C(a,b,c,d){i(a,(L&lt;&lt;1)+(d?1:0),3),r(a,b,c,!0)}function D(a){i(a,M&lt;&lt;1,3),j(a,Z,ga),l(a)}function E(a,b,c,d){var e,f,g=0;a.level&gt;0?(a.strm.data_type===K&amp;&amp;(a.strm.data_type=A(a)),v(a,a.l_desc),v(a,a.d_desc),g=y(a),e=a.opt_len+3+7&gt;&gt;&gt;3,f=a.static_len+3+7&gt;&gt;&gt;3,f&lt;=e&amp;&amp;(e=f)):e=f=c+5,c+4&lt;=e&amp;&amp;b!==-1?C(a,b,c,d):a.strategy===H||f===e?(i(a,(M&lt;&lt;1)+(d?1:0),3),u(a,ga,ha)):(i(a,(N&lt;&lt;1)+(d?1:0),3),z(a,a.l_desc.max_code+1,a.d_desc.max_code+1,g+1),u(a,a.dyn_ltree,a.dyn_dtree)),p(a),d&amp;&amp;q(a)}function F(a,b,c){return a.pending_buf[a.d_buf+2*a.last_lit]=b&gt;&gt;&gt;8&amp;255,a.pending_buf[a.d_buf+2*a.last_lit+1]=255&amp;b,a.pending_buf[a.l_buf+a.last_lit]=255&amp;c,a.last_lit++,0===b?a.dyn_ltree[2*c]++:(a.matches++,b--,a.dyn_ltree[2*(ja[c]+R+1)]++,a.dyn_dtree[2*g(b)]++),a.last_lit===a.lit_bufsize-1}var G=a(&quot;../utils/common&quot;),H=4,I=0,J=1,K=2,L=0,M=1,N=2,O=3,P=258,Q=29,R=256,S=R+1+Q,T=30,U=19,V=2*S+1,W=15,X=16,Y=7,Z=256,$=16,_=17,aa=18,ba=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],ca=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],da=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],ea=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],fa=512,ga=new Array(2*(S+2));d(ga);var ha=new Array(2*T);d(ha);var ia=new Array(fa);d(ia);var ja=new Array(P-O+1);d(ja);var ka=new Array(Q);d(ka);var la=new Array(T);d(la);var ma,na,oa,pa=!1;c._tr_init=B,c._tr_stored_block=C,c._tr_flush_block=E,c._tr_tally=F,c._tr_align=D},{&quot;../utils/common&quot;:28}],40:[function(a,b,c){&quot;use strict&quot;;function d(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg=&quot;&quot;,this.state=null,this.data_type=2,this.adler=0}b.exports=d},{}]},{},[10])(10)});</td>
      </tr>
</table>

  </div>

</div>

<button type="button" data-facebox="#jump-to-line" data-facebox-class="linejump" data-hotkey="l" class="d-none">Jump to Line</button>
<div id="jump-to-line" style="display:none">
  <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="" class="js-jump-to-line-form" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <input class="form-control linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
    <button type="submit" class="btn">Go</button>
</form></div>

  </div>
  <div class="modal-backdrop js-touch-events"></div>
</div>




    </div>
  </div>

  </div>

      <div class="container site-footer-container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links float-right">
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact GitHub</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage" class="site-footer-mark" title="GitHub">
      <svg aria-hidden="true" class="octicon octicon-mark-github" height="24" version="1.1" viewBox="0 0 16 16" width="24"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2017 <span title="0.13425s from github-fe-8320e0c.cp1-iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
        <li><a href="https://help.github.com" data-ga-click="Footer, go to help, text:help">Help</a></li>
    </ul>
  </div>
</div>



  

  <div id="ajax-error-message" class="ajax-error-message flash flash-error">
    <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"/></svg>
    <button type="button" class="flash-close js-flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
      <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
    </button>
    You can't perform that action at this time.
  </div>


    <script crossorigin="anonymous" integrity="sha256-ikMY/+oJoM24IUt2zykmufagztMYoxe+1BnbGSFMaQ0=" src="https://assets-cdn.github.com/assets/compat-8a4318ffea09a0cdb8214b76cf2926b9f6a0ced318a317bed419db19214c690d.js"></script>
    <script crossorigin="anonymous" integrity="sha256-1JosuxdBEU79W/hETstbtbhd0VQHsJR9mShSb0smv/g=" src="https://assets-cdn.github.com/assets/frameworks-d49a2cbb1741114efd5bf8444ecb5bb5b85dd15407b0947d9928526f4b26bff8.js"></script>
    <script async="async" crossorigin="anonymous" integrity="sha256-GAuTlp7HyxDDeWvIlDD1601HNqLiqaiAJJZv1W/ZRuc=" src="https://assets-cdn.github.com/assets/github-180b93969ec7cb10c3796bc89430f5eb4d4736a2e2a9a88024966fd56fd946e7.js"></script>
    
    
    
    
  <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner d-none">
    <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"/></svg>
    <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
    <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
  </div>
  <div class="facebox" id="facebox" style="display:none;">
  <div class="facebox-popup">
    <div class="facebox-content" role="dialog" aria-labelledby="facebox-header" aria-describedby="facebox-description">
    </div>
    <button type="button" class="facebox-close js-facebox-close" aria-label="Close modal">
      <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
    </button>
  </div>
</div>


  </body>
</html>

