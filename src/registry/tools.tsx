import { lazy } from 'react';
import type { Tool, Category } from '../types';

export const TOOLS: Tool[] = [
  {
    id: 'student-loan-calc',
    name: 'Student Loan Calculator',
    slug: 'student-loan-calculator',
    description: 'Estimate your monthly payments and interest for your student loans with our easy-to-use calculator.',
    shortDescription: 'Calculate monthly payments for student loans.',
    category: 'Finance',
    iconName: 'GraduationCap',
    component: lazy(() => import('../components/tools/StudentLoanCalculator')),
  },
  {
    id: 'auto-loan-calc',
    name: 'Auto Loan Calculator',
    slug: 'auto-loan-calculator',
    description: 'Calculate your auto loan payments, including interest and total cost over the life of the loan.',
    shortDescription: 'Auto loan payment estimator.',
    category: 'Finance',
    iconName: 'Car',
    component: lazy(() => import('../components/tools/AutoLoanCalculator')),
  },
  {
    id: 'personal-loan-calc',
    name: 'Personal Loan Calculator',
    slug: 'personal-loan-calculator',
    description: 'Plan your personal loan EMI and see the total interest payable with our streamlined calculator.',
    shortDescription: 'Estimate personal loan costs.',
    category: 'Finance',
    iconName: 'BadgeDollarSign',
    component: lazy(() => import('../components/tools/PersonalLoanCalculator')),
  },
  {
    id: 'emi-loan-calc',
    name: 'EMI Loan Calculator',
    slug: 'emi-loan-calculator',
    description: 'A versatile Equated Monthly Installment (EMI) calculator for all types of loans.',
    shortDescription: 'Universal loan EMI calculator.',
    category: 'Finance',
    iconName: 'Calculator',
    component: lazy(() => import('../components/tools/EMICalculator')),
  },
];

export const CATEGORIES: Category[] = [
  {
    id: 'finance',
    name: 'Finance Tools',
    slug: 'finance',
    toolIds: ['student-loan-calc', 'auto-loan-calc', 'personal-loan-calc', 'emi-loan-calc'],
  },
];
