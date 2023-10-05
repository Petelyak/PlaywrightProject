import { chromium, Browser, Page } from 'playwright';
import { test, expect } from '@playwright/test';
import signIn  from '../Common/login'

signIn();
