<?php
 
	Class extension_codemirror extends Extension{
 
		public function about(){
			return array('name' => 'Enable Codemirror',
						 'version' => '1.2',
						 'release-date' => '2009-12-01',
						 'author' => array('name' => 'Ole A. E.',
							        'website' => 'http://oleae.no',
							        'email' => 'post@oleae.no')
				 		);
		}
 
 
		public function getSubscribedDelegates() {
			return array(
				array(
					'page'		=> '/backend/',
					'delegate'	=> 'InitaliseAdminPageHead',
					'callback'	=> 'initaliseAdminPageHead'
				)
			);
		}
 
		public function initaliseAdminPageHead($context) {
			$page = $context['parent']->Page;
        
		   $page->addStylesheetToHead(URL . '/extensions/codemirror/assets/css/codemirror.css', 'screen', 3066705);
			$page->addScriptToHead(URL . '/extensions/codemirror/assets/js/codemirror.js', 3066704);
			$page->addScriptToHead(URL . '/extensions/codemirror/assets/js/init.js', 3066703);
		}
 
	}
 
?>